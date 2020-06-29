import { TYPE_NAME } from './types'

export const callAPI = (data) => {
  return { type: TYPE_NAME, payload: data }
}