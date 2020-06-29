// react imports
import React from 'react'

import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

// project imports
import Menu from './components/menu'

// local imports
import { GlobalStyles } from './styles'
import routers from './routers'


const App = () => {
  const not_found = () => {
    return (
      <h1>Página não encontrada</h1>
    )
  }

  return (
    <>
      <GlobalStyles />

      <HashRouter>
        <Menu>
          <Switch>
            {
              routers.map((route, index) => {
                if (route.path)
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact ? route.exact : false}
                      component={route.component} />
                  )
              })
            }
            <Route component={not_found} />
          </Switch>
        </Menu>
      </HashRouter>
    </>
  )
}

export default App
