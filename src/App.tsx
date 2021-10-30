import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { routes } from '~/routes'
import '~/style.css'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact>
                {route.component}
              </Route>
            ))}
          </Switch>
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
