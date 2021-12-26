import axios from '~/utils/axios'

export const queryUsers = async ({ queryKey }: { queryKey: any[] }) => {
  const [_, { searchPattern, currentPage = 1, limit }] = queryKey
  const offset = (currentPage - 1) * limit
  return await axios.get(`/users/?search=${searchPattern}&offset=${offset}&limit=${limit}`, { withAuthorization: true })
}
