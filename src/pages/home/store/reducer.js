import { fromJS } from 'immutable';
import {ACTIVE_TAB_CHANGE, INIT_TOPIC_LIST, CURRENT_PAGE_CHANGE} from './constants'

const defaultState = fromJS({
  activeTab: 'all',
  limit: 20,
  page: 1,
  tabList: [
    {label: '全部', value: 'all'},
    {label: '精华', value: 'good'},
    {label: '分享', value: 'share'},
    {label: '问答', value: 'ask'},
    {label: '招聘', value: 'job'}
  ],
  topicList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVE_TAB_CHANGE: {
      return state.set('activeTab', action.value)
    }
    case CURRENT_PAGE_CHANGE: {
      if (action.value) {
        return state.update('page', value => value + action.value)
      } else {
        return state.set('page', 1)
      }
    }
    case INIT_TOPIC_LIST: {
      return state.set('topicList', fromJS(action.value))
    }
    default:
      return state
  }
}

