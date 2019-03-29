import {ACTIVE_TAB_CHANGE, INIT_TOPIC_LIST} from './constants'

export const activeTabChange = (value) => ({
  type: ACTIVE_TAB_CHANGE,
  value
})

export const initTopicList = (dataList) => ({
  type: INIT_TOPIC_LIST,
  value: dataList
})