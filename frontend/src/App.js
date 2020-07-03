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
import './static/css/global-styles.scss'
import routers from './routers'
import notFound from './containers/404/not-found'


const App = () => {

  return (
    <>
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
            <Route component={notFound} />
          </Switch>
        </Menu>
      </HashRouter>
    </>
  )
}

export default App
