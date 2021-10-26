import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import NavigationItem from './NavigationItem'

const navigationItems = [
  {
    key: 'home',
    label: 'home',
  },
  {
    key: 'template',
    label: 'template',
    children: [
      {
        key: 'all_template',
        label: 'All template',
      },
      {
        key: 'create_template',
        label: 'Create template',
      },
    ],
  },
  {
    key: 'store',
    label: 'store',
  },
]

const INITIAL_TAB = 'home'

const flattenNavigationItems = (navigationItems: NavigationItem[]): string[] => {
  const tabs: string[] = []
  navigationItems.map((item) => {
    tabs.push(item.key)
    if (item.children) {
      item.children.forEach((childItem) => {
        tabs.push(childItem.key)
      })
    }
  })
  return tabs
}

const SidebarNavigation = () => {
  const { tab }: Record<string, unknown> = useParams()
  const [activeTab, setActiveTab] = useState<string>((tab || INITIAL_TAB) as string)

  console.log(flattenNavigationItems(navigationItems))
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between w-1/6 h-screen text-gray-200 bg-gray-800">
      <div className="pt-20">
        {navigationItems.map((item) => (
          <NavigationItem key={item.key} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>
      <div className="flex flex-row w-full py-4 pl-4 text-white bg-gray-700">
        <img
          src="https://giaithuongtinhnguyen.vn/dien-vien-fukuda/imager_7350.jpg"
          alt="avatar"
          className="object-cover w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="font-medium">Tu Le Thanh</p>
          <p className="text-sm">View profile</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarNavigation
