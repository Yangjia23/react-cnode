import {SEARCH_VALUE_CHANGE} from './constants'

export const searchValChange = (value) => (
  {
    type: SEARCH_VALUE_CHANGE,
    value
  }
)