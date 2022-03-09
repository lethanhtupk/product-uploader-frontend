import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { NAVIGATION_PATHS } from '~/utils/routes'

const NonAuthNavigation = () => {
  const history = useHistory()
  const { t } = useTranslation()

  const onLogin = () => {
    history.push(NAVIGATION_PATHS.LOGIN)
  }

  return (
    <div className="non-auth-navigation">
      <button className="non-auth-navigation-item">{t('Register')}</button>
      <button className="non-auth-navigation-item" onClick={onLogin}>
        {t('Login')}
      </button>
    </div>
  )
}

export default NonAuthNavigation
