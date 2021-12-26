import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import NotFound404Page from '~/pages/404'
import Navigation from '~/components/layouts/Navigation'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import { routes } from '~/routes'
import '~/style.css'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <React.Suspense fallback={<LoadingIndicator />}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} exact>
                  {route.component}
                </Route>
              ))}
              <Route path="*">
                <NotFound404Page />
              </Route>
            </Switch>
            <Navigation />
          </Router>
        </QueryClientProvider>
      </React.Suspense>
    </RecoilRoot>
  )
}

export default App
