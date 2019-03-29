import { fromJS } from 'immutable';
import {ACTIVE_TAB_CHANGE} from './constants'

const defaultState = fromJS({
  activeTab: 'all',
  tabList: [
    {label: '全部', value: 'all'},
    {label: '精华', value: 'good'},
    {label: '分享', value: 'share'},
    {label: '问答', value: 'ask'},
    {label: '招聘', value: 'job'}
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVE_TAB_CHANGE: {
      return state.set('activeTab', action.value)
    }
    default:
      return state
  }
}

