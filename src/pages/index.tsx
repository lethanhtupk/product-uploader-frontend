import React from 'react'
import NonAuthNavigation from '~/components/layouts/Navigation/NonAuthNavigation'
import NotFound from '~/components/screens/NotFound'
import Notification from '~/components/widgets/Notification'

const RootPage = () => {
  return (
    <>
      <header>
        <title>Product Uploader</title>
      </header>
      <NonAuthNavigation />
      <Notification />
      <NotFound />
    </>
  )
}

export default RootPage
