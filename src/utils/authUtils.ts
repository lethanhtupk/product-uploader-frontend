const enum LOCAL_STORAGE {
  ACCESS_TOKEN = '@access_token',
  REFRESH_TOKEN = '@refresh_token',
  ME = '@me',
}

export const enum ROLE {
  USER = 1,
  ADMIN = 2,
  SUPER_ADMIN = 3,
}

export const isAdmin = (me: IMe) => {
  return !!me && (me.role === ROLE.ADMIN || me.role === ROLE.SUPER_ADMIN)
}

export interface IMe {
  username: string
  email: string
  first_name?: string
  last_name?: string
  role: number
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

export const getMe = (): IMe => {
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE.ME))
}

export const setMe = (me: IMe) => {
  window.localStorage.setItem(LOCAL_STORAGE.ME, JSON.stringify(me))
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
