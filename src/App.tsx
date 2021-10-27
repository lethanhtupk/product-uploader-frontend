import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { routes } from '~/routes'
import '~/style.css'

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App
