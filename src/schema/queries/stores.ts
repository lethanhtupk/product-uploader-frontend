import axios from '~/utils/axios'

export const queryStores = async ({ queryKey }: { queryKey: any[] }) => {
  const [_, { searchPattern, currentPage, limit }] = queryKey
  return await axios.get('/stores/', { withAuthorization: true })
}
