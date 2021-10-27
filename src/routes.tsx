import React from 'react'
import RootPage from '~/pages/index'
import LoginPage from './pages/login'

const enum PAGE_TITLES {
  HOME = 'Product Uploader | Home',
  LOGIN = 'Product Uploader | Login',
  UPLOAD_PRODUCT = 'Product Uploader | Upload Products',
  EDIT_PRODUCT = 'Product Uploader | Edit Products',
}

interface IRoute {
  path: string
  component: JSX.Element
}

export const routes: IRoute[] = [
  {
    path: '/',
    component: <RootPage title={PAGE_TITLES.HOME} />,
  },
  {
    path: '/login',
    component: <LoginPage title={PAGE_TITLES.LOGIN} />,
  },
]
