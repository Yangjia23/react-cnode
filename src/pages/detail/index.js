import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionCreater} from './store'
import {PageWrapper, PageMain, PageAside} from '../../style';
import Article from './subpage/Article'
import Comment from './subpage/Comment'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topicId: this.props.match.params.id
    }
  }
  render() {
    return (
      <PageWrapper>
        <PageMain>
          <Article />
          <Comment />
        </PageMain>
        <PageAside>
        </PageAside>
      </PageWrapper>
    )
  }
  componentDidMount () {
    this.props.getTopicDetail(this.state.topicId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicDetail (id) {
      dispatch(actionCreater.getTopicDetail(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Detail)
