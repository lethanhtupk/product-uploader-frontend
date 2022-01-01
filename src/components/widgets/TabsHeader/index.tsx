import React from 'react'

interface ITab {
  name: string
  key: string
}

interface Props {
  tabs: ITab[]
}

const TabsHeader = ({ tabs }: Props) => {
  return (
    <div className="">
      {tabs.map((tab) => (
        <div className="w-48 py-4 bg-white border-purple-700 border-t-3" key={tab.key}>
          <p className="text-sm text-center capitalize">{tab.name}</p>
        </div>
      ))}
    </div>
  )
}

export default TabsHeader
