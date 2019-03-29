import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 15px auto;
  max-width: 1400px;
  min-width: 960px;
  min-height: 400px;
  display: flex;
`

export const HomeMain = styled.div`
  flex: 1;
  margin-right: 15px;
`

export const TabWrapper = styled.div`
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
`

export const TabItem = styled.a`
  font-size: 14px;
  margin: 0 10px;
  color: #80bd01;
  cursor: pointer;
  line-height: 20px;
  &.current-tab{
    color: #fff;
    background: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    &:hover{
      color: #fff;
    }
  }
  &:hover{
    color: #005580;
  }
`

export const HomeAside = styled.div`
  width: 290px;
  border: 1px solid blue;
`

