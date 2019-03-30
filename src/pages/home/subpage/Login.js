import React, { Component } from 'react'
import {LoginWrapper} from '../style'

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <h3 className="login-title">CNode: Node.js 专业中文社区</h3>
        <input type="text" className="login-input" placeholder="Access Token"/>
        <button className="login-submit">登录</button>
      </LoginWrapper>
    )
  }
}
