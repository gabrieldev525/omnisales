import { TYPE_NAME } from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case TYPE_NAME:
      return action.payload
    default:
      return state
  }
}