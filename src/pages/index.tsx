import React from 'react'
import NonAuthNavigation from '~/components/layouts/Navigation/NonAuthNavigation'
import NotFound from '~/components/screens/NotFound'
import Modal from '~/components/widgets/Modal'
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
      <Modal
        title="Deactivate account"
        message="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        actionLabel="Deactivate"
        cancelLabel="Cancel"
      />
    </>
  )
}

export default RootPage
