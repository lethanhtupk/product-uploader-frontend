import React from 'react'
import StoreCreate from '~/components/screens/StoreCreate'
import withAuthorization from '~/hocs/withAuthorization'
import { isAdmin } from '~/utils/authUtils'

const StoreCreatePage = ({ title }: { title: string }) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      <section className="main-content">
        <StoreCreate />
      </section>
    </>
  )
}

export default withAuthorization(isAdmin)(StoreCreatePage)
