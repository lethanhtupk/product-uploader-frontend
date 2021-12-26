import React from 'react'
import StoreForm from '~/components/widgets/StoreForm'

const StoreCreate = () => {
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <h1 className="text-4xl font-extrabold">Create a new store</h1>
      <StoreForm />
    </div>
  )
}

export default StoreCreate
