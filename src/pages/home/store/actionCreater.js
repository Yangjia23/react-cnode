import {ACTIVE_TAB_CHANGE, INIT_TOPIC_LIST, CURRENT_PAGE_CHANGE} from './constants';
import Api from '../../../api'

export const activeTabChange = (value) => ({
  type: ACTIVE_TAB_CHANGE,
  value
})

export const getTopicData = (data) => {
  return (dispatch) => {
    Api.getTopics(data).then(res => {
      if (res && res.data) {
        const action = initTopicList(res.data)
        dispatch(action)
      }
    })
  }
}

export const initTopicList = (dataList) => ({
  type: INIT_TOPIC_LIST,
  value: dataList
})

export const currentPageChange = (value) => ({
  type: CURRENT_PAGE_CHANGE,
  value
})