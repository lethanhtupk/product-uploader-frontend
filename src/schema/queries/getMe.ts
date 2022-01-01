import axios from '~/utils/axios'

export const getMeAsync = async () => {
  return await axios.get('/auth/users/me/', { withAuthorization: true })
}
