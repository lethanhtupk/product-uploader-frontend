import React from 'react'
import { RecoilRoot } from 'recoil'
import RootPage from '~/pages'
import '~/style.css'

const App = () => {
  return (
    <div className="w-full">
      <RecoilRoot>
        <RootPage />
      </RecoilRoot>
    </div>
  )
}

export default App
