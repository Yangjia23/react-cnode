import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem} from '../style';

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.topicList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <img className="author-avatar"
                  src={item.getIn(['author', 'avatar_url'])}
                  title={item.getIn(['author', 'loginname'])}
                  alt={item.getIn(['author', 'loginname'])}/>
                <div className="count-wrap">
                  <span className="count-of-reply">{item.get('reply_count')}</span>
                  <span className="count-seperator">/</span>
                  <span className="count-of-visit">{item.get('visit_count')}</span>
                </div>
                <span className="tab-type">分享</span>
                <a className="topic-title" title={item.get('title')}>
                  {item.get('title')}
                </a>
                <a className="last-reply-info">
                  <img className="last-reply-avatar" src="https://avatars2.githubusercontent.com/u/16009062?v=4&s=120"/>
                  <span className="last-reply-time">2小时前</span>
                </a>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
