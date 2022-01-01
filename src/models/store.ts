import { IUser } from './user'

export interface IStore {
  domain_name: string
  consumer_key: string
  secret_key: string
  users: IUser[]
}

export interface StoreInstance extends IStore {
  id: string
}
