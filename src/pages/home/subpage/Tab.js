import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from '../store'
import {TabWrapper, TabItem} from '../style';

class Tab extends Component {
  render() {
    return (
      <TabWrapper>
        {
          this.props.tabList.map((item) => {
            return <TabItem
              className={item.get('value') === this.props.activeTab ? 'current-tab' : ''}
              onClick={this.props.handleTabClick.bind(this, item.get('value'))}
              key={item.get('value')}>
                {item.get('label')}
              </TabItem>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)
