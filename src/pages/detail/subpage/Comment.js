import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {CommentWrapper, CommentHeader, CommentContent} from '../style';

class Comment extends Component {
    render() {
        console.log(this.props.replies)
        return (
            <CommentWrapper>
                <CommentHeader>
                    <span className="reply-count">回复</span>
                </CommentHeader>
                <CommentContent>
                    {
                        this.props.replies.map(item => {
                            return (
                                <div className="comment-item">
                                    <Link to={'user/' + item}>
                                        <img />
                                    </Link>
                                    <div className="reply-text"></div>
                                </div>
                            )
                        })
                    }
                </CommentContent>
            </CommentWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.getIn(['detail', 'topic']).get('replies'))
    return {
        replies: state.getIn(['detail', 'topic', 'replies'])
    }
}

export default connect(mapStateToProps, null)(Comment);