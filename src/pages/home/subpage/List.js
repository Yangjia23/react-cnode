import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {ListItem} from '../style';

class List extends Component {
  constructor (props) {
    super(props);
    this.replaceTypes = this.replaceTypes.bind(this);
    this.replaceTime = this.replaceTime.bind(this);
  }
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
                <span className={(item.get('top') || item.get('good')) ? 'active tab-type' : 'tab-type'}>
                  {this.replaceTypes(item.get('top'), item.get('good'), item.get('tab'))}
                </span>
                <Link className="topic-title" title={item.get('title')} to={'topic/' + item.get('id')}>
                  {item.get('title')}
                </Link>
                <div className="last-reply-info">
                  <span className="last-reply-time">
                    {this.replaceTime(item.get('last_reply_at'))}
                  </span>
                </div>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
  replaceTypes (isTop, isGood, tab) {
    const currentItem = this.props.tabList.find(item => item.get('value') === tab)
    if (!currentItem) {
      console.log(tab)
    }
    if (isTop) {
      return '置顶'
    } else if (isGood) {
      return '精华'
    } else {
      return currentItem && currentItem.get('label') || '--'
    }
  }
  replaceTime (lastReplyTime) {
    return moment(lastReplyTime).startOf().fromNow()
  }
}

const mapStateToProps = (state) => {
  return {
    tabList: state.getIn(['home', 'tabList']),
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
