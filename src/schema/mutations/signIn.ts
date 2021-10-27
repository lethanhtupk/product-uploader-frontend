import customAxios from '~/utils/axios'

export interface IUserInput {
  username: string
  password: string
}

export const signIn = async (data: IUserInput) => {
  await customAxios.post('/auth/jwt/create', { ...data })
}
