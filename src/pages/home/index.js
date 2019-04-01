import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store'
import {PageWrapper, PageMain, PageAside} from '../../style';
import Tab from './subpage/Tab'
import List from './subpage/List'
import Pagination from './subpage/Pagination'
import Login from './subpage/Login'
import Friends from './subpage/Friends'
import Advertise from './subpage/Advertise'

class Home extends Component {
  constructor (props) {
    super(props);
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this)
    this.getTopicDataList = this.getTopicDataList.bind(this)
  }
  render() {
    return (
      <PageWrapper>
        <PageMain>
          <Tab></Tab>
          <List />
          <Pagination currentPage={this.props.page} currentChange={this.handleCurrentPageChange}></Pagination>
        </PageMain>
        <PageAside>
          <Login />
          <Advertise />
          <Friends />
        </PageAside>
      </PageWrapper>
    )
  }
  componentDidMount () {
    this.getTopicDataList()
  }
  async handleCurrentPageChange (val) {
    await this.props.currentChange(val)
    this.getTopicDataList()
  }
  getTopicDataList ({page, tab, limit} = this.props) {
    const data = {
      page,
      tab,
      limit
    }
    const action = actionCreater.getTopicData(data)
    this.props.getTopicData(action)
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.getIn(['home', 'activeTab']),
    page: state.getIn(['home', 'page']),
    limit: state.getIn(['home', 'limit'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  currentChange (val) {
    dispatch(actionCreater.currentPageChange(val))
  },
  getTopicData (action) {
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
