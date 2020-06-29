// redux
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux"
import thunk from "redux-thunk"


// project imports
import ExampleReducer from './example/reducer'

const reducers = combineReducers({
  example: ExampleReducer,
})

const enhancers = []

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
)

export default createStore(reducers, composedEnhancers)
