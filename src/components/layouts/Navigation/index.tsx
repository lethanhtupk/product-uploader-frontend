import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'
import SidebarNavigation from '../SideBarNavigation'
import NonAuthNavigation from './NonAuthNavigation'

const Navigation = () => {
  const me = useRecoilValue(getCurrentUser)

  return <>{me ? <SidebarNavigation /> : <NonAuthNavigation />}</>
}

export default Navigation
