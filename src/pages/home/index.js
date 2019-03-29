import React, { Component } from 'react'
import {HomeWrapper, HomeMain, HomeAside} from './style'
import Tab from './subpage/Tab'
import List from './subpage/List'
import Login from './subpage/Login'
import Topic from './subpage/Topic'

export default class Home extends Component {
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
}
