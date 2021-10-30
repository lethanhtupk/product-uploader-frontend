import React from 'react'
import { useHistory } from 'react-router-dom'
import { NAVIGATION_PATHS } from '../SideBarNavigation'

const NonAuthNavigation = () => {
  const history = useHistory()

  const onLogin = () => {
    history.push(NAVIGATION_PATHS.LOGIN)
  }

  return (
    <div className="non-auth-navigation">
      <button className="non-auth-navigation-item">Register</button>
      <button className="non-auth-navigation-item" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}

export default NonAuthNavigation
