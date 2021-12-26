import React from 'react'
import StoreList from '~/components/screens/StoreList'

const StorePage = ({ title }: { title: string }) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      <section className="main-content">
        <StoreList />
      </section>
    </>
  )
}

export default StorePage
