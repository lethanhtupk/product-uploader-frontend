import { atom, selector } from 'recoil'
import { getMeAsync } from '~/schema/queries/getMe'
import { getAccessToken, getRefreshToken, IMe, setMe } from '~/utils/authUtils'

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
  get: async ({ get }) => {
    try {
      const tokens = get(tokenState)
      if (!tokens.accessToken) {
        console.info('No token has been found')
        return null
      }
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
