import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from './pages/routes'
import { Navbar } from './components/navbar'

export const Routes = () => (
   <>
      <Navbar />
      <main className="content">
         <Switch>
            <Suspense fallback={<div>Loading...</div>}>
               {routes.map(path => (
                  <Route
                     key={path}
                     exact
                     path={path}
                     render={props =>
                        React.createElement(
                           React.lazy(() => import(`./pages${path}`)),
                           props
                        )
                     }
                  />
               ))}
            </Suspense>
            <Redirect to={'/home'} />
         </Switch>
      </main>
   </>
)
