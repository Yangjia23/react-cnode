import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreater } from '../store'
import {TabWrapper} from '../style';

class Tab extends Component {
  render() {
    return (
      <TabWrapper>
        {
          this.props.tabList.map((item) => {
            return <Link
              key={item.get('value')}
              to={'?tab=' + item.get('value')}
              onClick={this.props.handleTabClick.bind(this, item.get('value'))}
              className={item.get('value') === this.props.activeTab ? 'current-tab tab-item' : 'tab-item'}>
                {item.get('label')}
            </Link>
          })
        }
      </TabWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.getIn(['home', 'activeTab']),
    tabList: state.getIn(['home', 'tabList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTabClick (val) {
      dispatch(actionCreater.activeTabChange(val))
      dispatch(actionCreater.currentPageChange(0))
      const data = {
        page: 1,
        tab: val,
        limit: 20
      }
      dispatch(actionCreater.getTopicData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)
