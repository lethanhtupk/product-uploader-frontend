import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import RootPage from '~/pages'
import '~/style.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RecoilRoot>
            <RootPage />
          </RecoilRoot>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
