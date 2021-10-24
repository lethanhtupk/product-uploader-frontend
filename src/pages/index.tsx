import React from 'react'
import NonAuthNavigation from '~/components/layouts/Navigation/NonAuthNavigation'
import NotFound from '~/components/screens/NotFound'

const RootPage = () => {
  return (
    <>
      <header>
        <title>Product Uploader</title>
      </header>
      <NonAuthNavigation />
      <NotFound />
    </>
  )
}

export default RootPage
