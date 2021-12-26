import React from 'react'
import { useRecoilValue } from 'recoil'
import Forbidden403Page from '~/pages/403'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'
import { IMe } from '~/utils/authUtils'

const withAuthorization =
  (condition: (me: IMe) => boolean) => (Component: React.ComponentType<Record<string, unknown>>) => {
    const WithAuthorization = (props: Record<string, unknown>) => {
      const me = useRecoilValue(getCurrentUser)
      if (!condition(me)) {
        return <Forbidden403Page />
      }
      return <Component {...props} />
    }

    return WithAuthorization
  }

export default withAuthorization
