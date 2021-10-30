const enum LOCAL_STORAGE {
  ACCESS_TOKEN = '@access_token',
  REFRESH_TOKEN = '@refresh_token',
  ME = '@me',
}

export interface ILocalStorage {
  access_token: string
  refresh_token: string
}

export const getAccessToken = (): string => {
  return window.localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
}

export const setAccessToken = (token: string): void => {
  window.localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token)
}

export const getRefreshToken = (): string => {
  return window.localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN)
}

export const setRefreshToken = (token: string): void => {
  window.localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, token)
}

export const logout = () => {
  window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN)
  window.localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN)
  window.localStorage.removeItem(LOCAL_STORAGE.ME)
}

export const login = ({ access, refresh }: { access: string; refresh: string }) => {
  window.localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, access)
  window.localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, refresh)
}
