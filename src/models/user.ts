export type IUser = {
  id: number
  first_name?: string
  last_name?: string
  role: number
  username: string
  wp_username?: string
  wp_password?: string
}

export interface IUserPage {
  count: number
  previous: string | null
  next: string | null
  results: IUser[] | []
}
