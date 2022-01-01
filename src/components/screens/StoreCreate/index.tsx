import React from 'react'
import BackButton from '~/components/elements/BackButton'
import StoreForm from '~/components/widgets/StoreForm'
import TabsHeader from '~/components/widgets/TabsHeader'

const StoreCreate = () => {
  return (
    <div className="flex flex-col w-full pb-8 mx-6 mt-20">
      <TabsHeader tabs={[{ name: 'stores', key: 'stores' }]} />
      <div className="relative h-full bg-white shadow-lg pl-28">
        <BackButton positionStyle="absolute top-5 left-10" />
        <StoreForm />
      </div>
    </div>
  )
}

export default StoreCreate
