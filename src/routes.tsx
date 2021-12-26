import React from 'react'
import RootPage from '~/pages/index'
import LoginPage from '~/pages/login'
import StorePage from '~/pages/stores'
import StoreCreatePage from '~/pages/store_create'
import { NAVIGATION_PATHS } from '~/utils/routes'

const enum PAGE_TITLES {
  HOME = 'Product Uploader | Home',
  LOGIN = 'Product Uploader | Login',
  UPLOAD_PRODUCT = 'Product Uploader | Upload Products',
  EDIT_PRODUCT = 'Product Uploader | Edit Products',
  STORES = 'Product Uploader | All Store',
  CREATE_STORE = 'Product Uploader | New Store',
}

interface IRoute {
  name: string
  path: string
  component: React.ReactNode
}

export const routes: IRoute[] = [
  {
    name: 'home',
    path: NAVIGATION_PATHS.HOME,
    component: <RootPage title={PAGE_TITLES.HOME} />,
  },
  {
    name: 'login',
    path: NAVIGATION_PATHS.LOGIN,
    component: <LoginPage title={PAGE_TITLES.LOGIN} />,
  },
  {
    name: 'stores',
    path: NAVIGATION_PATHS.STORES,
    component: <StorePage title={PAGE_TITLES.STORES} />,
  },
  {
    name: 'create_store',
    path: NAVIGATION_PATHS.CREATE_STORE,
    component: <StoreCreatePage title={PAGE_TITLES.CREATE_STORE} />,
  },
]
