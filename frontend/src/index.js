import React from 'react'
import ReactDOM from 'react-dom'

import {
  HashRouter,
  Route
} from 'react-router-dom'

// local imports
import App from './App'

// redux
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <>
        <Route path='/' component={ App } />
      </>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)