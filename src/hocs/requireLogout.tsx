import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
// import Forbidden403Page from '~/pages/403'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'
// import { IMe } from '~/utils/authUtils'

const requireLogout = (Component: React.ComponentType<Record<string, unknown>>) => {
  const RequireLogout = (props: Record<string, unknown>) => {
    const me = useRecoilValue(getCurrentUser)
    const history = useHistory()
    if (me) {
      history.replace('/')
    }
    return <Component {...props} />
  }

  return RequireLogout
}

export default requireLogout
