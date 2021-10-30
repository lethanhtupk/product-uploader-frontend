import React from 'react'

const StoreCreatePage = ({ title }: { title: string }) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      <section className="main-content">
        <p>Store create page</p>
      </section>
    </>
  )
}

export default StoreCreatePage
