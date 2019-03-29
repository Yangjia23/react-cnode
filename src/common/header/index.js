import React from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper, HeaderMain, Logo, Nav, NavItem, SearchInput} from './style';
import {actionCreaters} from './store';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <HeaderMain>
                <Logo />
                <SearchInput
                    value={props.inputVal}
                    onChange={props.handleInputChange}>
                </SearchInput>
                <Nav>
                    <NavItem>首页</NavItem>
                    <NavItem>新手入门</NavItem>
                    <NavItem>API</NavItem>
                    <NavItem>关于</NavItem>
                    <NavItem>登录</NavItem>
                </Nav>
            </HeaderMain>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        inputVal: state.getIn(['header', 'inputVal'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange (e) {
            dispatch(actionCreaters.searchValChange(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)