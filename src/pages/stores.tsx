import React from 'react'

const StorePage = ({ title }: { title: string }) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      <section>
        <p>Store List</p>
      </section>
    </>
  )
}

export default StorePage
