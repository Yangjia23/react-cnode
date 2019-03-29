import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store'
import {HomeWrapper, HomeMain, HomeAside} from './style';
import Api from '../../api'
import Tab from './subpage/Tab'
import List from './subpage/List'
import Login from './subpage/Login'
import Topic from './subpage/Topic'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeMain>
          <Tab></Tab>
          <List />
        </HomeMain>
        <HomeAside>
          <Login />
          <Topic />
        </HomeAside>
      </HomeWrapper>
    )
  }
  componentDidMount () {
    const data = {
      page: 1,
      tab: 'all',
      limit: 20
    }
    Api.getTopics(data).then(res => {
      if (res && res.data) {
        this.props.initTopicList(res.data)
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  initTopicList (dataList) {
    dispatch(actionCreater.initTopicList(dataList))
  }
})

export default connect(null, mapDispatchToProps)(Home)
