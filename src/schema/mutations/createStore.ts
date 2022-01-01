import axios from '~/utils/axios'

type IStoreData = {
  domain_name: string
  consumer_key: string
  secret_key: string
  user?: { id: string }[]
}

export const createStore = async (storeData: IStoreData) => {
  return await axios.post('/stores', storeData, { withAuthorization: true })
}
