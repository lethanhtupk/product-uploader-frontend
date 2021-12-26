import axios, { AxiosRequestConfig } from 'axios'
import { UNKNOWN_ERROR } from '~/utils/errorUtils'
import { getAccessToken, getRefreshToken, logout, setAccessToken } from '~/utils/authUtils'

const UPDATE_SUCCESS_STATUS_CODE = [200, 204]
const DELETE_SUCCESS_STATUS_CODE = [200, 202, 204]

interface IConfig extends AxiosRequestConfig {
  withAuthorization?: boolean
}

const DEFAULT_REQUEST_CONFIG = {
  withAuthorization: true,
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://product-uploader-api.herokuapp.com/api/'
      : 'http://127.0.0.1:8000/api/',
}

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://product-uploader-api.herokuapp.com/api/'
    : 'http://127.0.0.1:8000/api/'

const injectAuthorizationHeader = (config: IConfig = {}) => {
  if (!config.withAuthorization) {
    return
  }

  // TODO: get the authToken from cookies, localStorage
  const accessToken = getAccessToken()
  if (accessToken) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    }
  }
}
// indicate the get new access_token from refresh token are happening.
let isRefreshing = false
const failedQueue: { resolve: (value: unknown) => void; reject: (reason: any) => void }[] = []

const processQueue = async (error: any, token?: string) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve(token)
    }
  })
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config

    // failed at refresh token -> logout user
    if (error?.config?.url === 'auth/jwt/refresh/' && error?.response?.status === 401) {
      logout()
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      // unauthorize at create access_token
      if (error?.config.url === 'auth/jwt/create/') {
        return Promise.reject(error)
      }
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`
            return Promise.resolve(axios(originalRequest))
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = getRefreshToken()

      if (!refreshToken) {
        isRefreshing = false
        return Promise.reject(error)
      }
      return new Promise((resolve, reject) => {
        axios
          .post('auth/jwt/refresh/', { refresh: refreshToken })
          .then((res) => {
            const { access } = res.data as { access: string }
            setAccessToken(access)
            originalRequest.headers['Authorization'] = `Bearer ${access}`
            processQueue(null, access)
            resolve(axios(originalRequest))
          })
          .catch((err) => {
            processQueue(err, null)
            reject(err)
          })
          .finally(() => {
            isRefreshing = false
          })
      })
    }
    return Promise.reject(error)
  },
)

const customAxios = {
  get(url: string, config: IConfig = DEFAULT_REQUEST_CONFIG) {
    injectAuthorizationHeader(config)
    // make sure no data in GET method
    config.data = {}

    return new Promise((resolve, reject) => {
      return axios
        .get(url, config)
        .then((res) => {
          const data = res.data as Record<string, unknown>
          if (res.status !== 200) {
            reject({ ...data })
          } else {
            resolve({ ...data })
          }
        })
        .catch((errors) => {
          if (errors.response?.data && errors?.response?.status < 4000) {
            reject({
              code: errors.response.status,
              errors: {
                ...errors.response.data,
              },
            })
          } else {
            reject(UNKNOWN_ERROR)
          }
        })
    })
  },

  post(url: string, data: Record<string, unknown> = {}, config: IConfig = DEFAULT_REQUEST_CONFIG) {
    injectAuthorizationHeader(config)

    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((res) => {
          const data = res.data as Record<string, unknown>
          if (res.status === 201) {
            reject({ ...data })
          } else {
            resolve({ ...data })
          }
        })
        .catch((errors) => {
          if (errors.response?.data && errors?.response?.status < 4000) {
            reject({
              code: errors.response.status,
              errors: {
                ...errors.response.data,
              },
            })
          } else {
            reject(UNKNOWN_ERROR)
          }
        })
    })
  },

  put(url: string, data: Record<string, unknown> = {}, config: IConfig = DEFAULT_REQUEST_CONFIG) {
    injectAuthorizationHeader(config)

    return new Promise((resolve, reject) => {
      axios
        .put(url, data, config)
        .then((res) => {
          const data = res.data as Record<string, unknown>
          if (!UPDATE_SUCCESS_STATUS_CODE.includes(res.status)) {
            reject({ ...data })
          } else {
            resolve({ ...data })
          }
        })
        .catch((errors) => {
          if (errors.response?.data && errors?.response?.status < 4000) {
            reject({
              code: errors.response.status,
              errors: {
                ...errors.response.data,
              },
            })
          } else {
            reject(UNKNOWN_ERROR)
          }
        })
    })
  },

  delete(url: string, config: IConfig = DEFAULT_REQUEST_CONFIG) {
    injectAuthorizationHeader(config)

    return new Promise((resolve, reject) => {
      axios
        .delete(url, config)
        .then((res) => {
          const data = res.data as Record<string, unknown>
          if (!DELETE_SUCCESS_STATUS_CODE.includes(res.status)) {
            reject({ ...data })
          } else {
            resolve({ ...data })
          }
        })
        .catch((errors) => {
          if (errors.response?.data && errors?.response?.status < 4000) {
            reject({
              code: errors.response.status,
              errors: {
                ...errors.response.data,
              },
            })
          } else {
            reject(UNKNOWN_ERROR)
          }
        })
    })
  },
}

export default customAxios
