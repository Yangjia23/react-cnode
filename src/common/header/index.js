import React, {Component} from 'react';
import {HeaderWrapper, HeaderMain, Logo, Nav, NavItem, SearchBox} from './style'

class Header extends Component {
    render () {
        return (
            <HeaderWrapper>
                <HeaderMain>
                    <Logo />
                    <SearchBox>
                        
                    </SearchBox>
                    <Nav>
                        <NavItem>首页</NavItem>
                        <NavItem>新手入门</NavItem>
                        <NavItem>API</NavItem>
                        <NavItem>关于</NavItem>
                        <NavItem>注册</NavItem>
                        <NavItem>登录</NavItem>
                    </Nav>
                </HeaderMain>
            </HeaderWrapper>
        )
    }
}

export default Header