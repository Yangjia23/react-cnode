import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AritcleWrapper, AritcleHeader, AritcleContent} from '../style'
import moment from 'moment';
import 'moment/locale/zh-cn';

class Article extends Component {
    constructor (props) {
        super(props)
        this.replaceTypes = this.replaceTypes.bind(this)
        this.replaceTime = this.replaceTime.bind(this)
    }
    render() {
        return (
            <AritcleWrapper>
                <AritcleHeader>
                    <div className="top-wrap">
                        {(this.props.top || this.props.good) ?
                             <span className="topic-type">{this.replaceTypes(this.props.top, this.props.good, this.props.tab)}</span> : ''}
                        <h2 className="topic-title">{this.props.title}</h2>
                    </div>
                    <div className="other-wrap">
                        <span className="other-item">发布于 {this.replaceTime(this.props.create_at)}</span>
                        <span className="other-item">作者 {this.props.author && this.props.author.loginname}</span>
                        <span className="other-item">{this.props.visit_count} 次浏览</span>
                        <span className="other-item">来自 {this.replaceTypes(false, false, this.props.tab)}</span>
                    </div>
                </AritcleHeader>
                <AritcleContent dangerouslySetInnerHTML={{__html:this.props.content}}>
                </AritcleContent>
            </AritcleWrapper>
        );
    }
    replaceTypes (isTop, isGood, tab) {
        const currentItem = this.props.tabList.find(item => item.get('value') === tab)
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
      ...state.getIn(['detail', 'topic']),
      tabList: state.getIn(['home', 'tabList'])
    }
}

export default connect(mapStateToProps, null)(Article);