import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 15px auto;
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  min-height: 400px;
  display: flex;
`

export const HomeMain = styled.div`
  flex: 1;
  width: calc(100% - 305px);
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

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
  &:hover {
    background: #f5f5f5;
  }
  .author-avatar{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
  }
  .count-wrap{
    width: 70px;
    text-align: center;
    .count-of-reply{
      font-size: 13px;
      color: #9e78c0;
    }
    .count-seperator{
      margin: 0 3px;
      font-size: 10px;
    }
    .count-of-visit{
      font-size: 10px;
      color: #b4b4b4;
    }
  }
  .tab-type{
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    font-size: 12px;
    border-radius: 3px;
  }
  .topic-title{
    flex: 1;
    max-width: 70%;
    margin: 0 auto 0 8px;
    color: #333;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      text-decoration: underline;
    }
    &.visited {
      color: #888;
    }
  }
  .last-reply-info{
    cursor: pointer;
    margin-left: 20px;
    .last-reply-avatar{
      margin-right: 8px;
      display: inline-block;
      vertical-align: top;
      width: 18px;
      height: 18px;
      border-radius: 2px;
    }
    .last-reply-time{
      color: #778087;
      font-size: 13px;
      text-align: right;
      min-width: 50px;
      white-space: nowrap;
    }

  }
`


export const HomeAside = styled.div`
  width: 290px;
  flex-shrink: 0;
  background: red;
`

