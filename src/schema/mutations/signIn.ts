import axios from '~/utils/axios'

export interface IUserInput {
  username: string
  password: string
}

export const signIn = async (data: IUserInput) => {
  return await axios.post('/auth/jwt/create', { ...data })
}
