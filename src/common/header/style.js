import styled from 'styled-components'
import logoImg from '../../static/images/logo.svg'
import searchIcon from '../../static/images/search.png'

export const HeaderWrapper = styled.header`
    height: 50px;
    background-color: #444;
`

export const HeaderMain = styled.main`
    box-sizing: border-box;
    width: 90%;
    height: 100%;
    min-width: 980px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 5px 0;
    display: flex;
    align-item: center;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    width: 120px;
    margin-top: 4px;
    background-color: red;
    background: url(${logoImg}) no-repeat;
    background-size: contain;
    cursor: pointer;
`

export const SearchInput = styled.input`
    box-sizing: border-box;
    width: 180px;
    border: none;
    outline: none;
    background: url(${searchIcon}) 4px 4px no-repeat #888;
    color: #666;
    padding: 0 12px 0 24px;
    height: 26px;
    border-radius: 13px;
    margin: 9px auto 0 15px;
    transition: all .2s;
    &:hover{
        background-color: #fff;
    };
    &:focus{
        background-color: #fff;
        width: 210px;
    }
`

export const Nav = styled.ul`
    display: flex;
    align-item: center;
`

export const NavItem = styled.li`
    color: #ccc;
    font-size: 13px;
    line-height: 42px;
    padding: 0 15px;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
`