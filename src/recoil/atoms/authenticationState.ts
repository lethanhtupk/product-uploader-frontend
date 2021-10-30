import { atom, selector } from 'recoil'
import { getMeAsync } from '~/schema/mutations/getMe'
import { getAccessToken, getRefreshToken, IMe, setMe } from '~/utils/authenticateUtils'

interface IToken {
  accessToken: string
  refreshToken: string
}

export const tokenState = atom({
  key: 'tokenState',
  default: { accessToken: getAccessToken(), refreshToken: getRefreshToken() } as IToken,
})

export const getCurrentUser = selector({
  key: 'getMe',
  get: async () => {
    try {
      const me = (await getMeAsync()) as IMe
      setMe(me)
      return me
    } catch (error) {
      console.error(error)
      setTimeout(() => {
        return null
      }, 5000)
    }
  },
})
