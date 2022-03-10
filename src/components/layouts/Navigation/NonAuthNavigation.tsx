import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import LanguageSelector from '~/components/elements/LanguageSelector'
import { NAVIGATION_PATHS } from '~/utils/routes'

const NonAuthNavigation = () => {
  const history = useHistory()
  const { t } = useTranslation()

  const onLogin = () => {
    history.push(NAVIGATION_PATHS.LOGIN)
  }

  return (
    <div className="items-center px-4 non-auth-navigation">
      <button className="h-full non-auth-navigation-item">{t('Register')}</button>
      <button className="h-full non-auth-navigation-item" onClick={onLogin}>
        {t('Login')}
      </button>
      <LanguageSelector />
    </div>
  )
}

export default NonAuthNavigation
