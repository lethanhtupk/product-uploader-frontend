import React, { useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import Icon from '~/components/elements/Icon'
import { tokenState } from '~/recoil/atoms/authenticationState'
import { logout } from '~/utils/authUtils'
import { NAVIGATION_PATHS } from '~/utils/routes'

interface NavigationItem {
  key: string
  label: string
  path?: string
  children?: NavigationItem[]
}

interface Props {
  item: NavigationItem
  children?: NavigationItem[]
  activeTab?: string
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>
}

const NavigationItem = ({ item, activeTab, setActiveTab }: Props) => {
  const { t } = useTranslation('common')
  const history = useHistory()
  const [isShowChildren, setIsShowChildren] = useState(false)
  const subNavigationRef = useRef(null)
  const setToken = useSetRecoilState(tokenState)

  useLayoutEffect(() => {
    if (isShowChildren) {
      subNavigationRef.current.scrollIntoView()
    }
  }, [isShowChildren])

  const onSelectTab = (item: NavigationItem) => {
    if (item.children) {
      setIsShowChildren(!isShowChildren)
    }
    if (item.key === 'logout') {
      setToken(() => {
        return { accessToken: null, refreshToken: null }
      })
      logout()
      history.push(NAVIGATION_PATHS.HOME)
    }
    history.push(item.path)
    setActiveTab(item.key)
  }

  return (
    <>
      <div
        className={`flex flex-row items-center px-4 py-4 cursor-pointer mx-2 rounded-lg hover:text-yellow-400 relative ${
          activeTab === item.key ? 'active-navigation-tab ' : isShowChildren ? 'text-white' : 'text-gray-400'
        }`}
        onClick={() => onSelectTab(item)}
      >
        <Icon name={item.key} style="w-6 h-6" />
        <p className="ml-4 capitalize">{t(item.label)}</p>
        {item.children && (
          <Icon
            name="chevronRight"
            style={`w-4 h-4 absolute right-4 transform duration-300 ${isShowChildren ? 'rotate-90' : 'rotate-0'} ${
              activeTab === item.key ? 'text-yellow-400' : isShowChildren ? 'text-white' : 'text-gray-400'
            }`}
          />
        )}
      </div>
      {item.children && isShowChildren && (
        <div className="bg-gray-800" ref={subNavigationRef}>
          {item.children.map((child) => (
            <div
              key={child.key}
              className={`py-4 mx-2 rounded-lg px-16 text-gray-400 cursor-pointer hover:text-yellow-400 ${
                child.key === activeTab ? 'active-navigation-tab' : ''
              }`}
              onClick={() => onSelectTab(child)}
            >
              {t(child.label)}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default NavigationItem
