import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputVal: '2121'
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_VALUE_CHANGE) {
    // immutable Set() 将结合之前旧的值和新设置的值， 返回一个全新的对象
    return state.set('inputVal', action.value)
  }
  return state
}