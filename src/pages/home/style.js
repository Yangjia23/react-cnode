import styled from 'styled-components'

export const TabWrapper = styled.div`
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  .tab-item {
    font-size: 14px;
    margin: 0 10px;
    color: #80bd01;
    cursor: pointer;
    line-height: 20px;
    text-decoration: none;
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
      margin: 0 1px;
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
    &.active{
      background-color: #80bd01;
      color: #fff;
    }
  }
  .topic-title{
    flex: 1;
    max-width: 70%;
    margin: 0 auto 0 8px;
    color: #333;
    line-height: 1.5em;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
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

export const PaginationWrap = styled.div`
    white-space: nowrap;
    padding: 2px 5px;
    margin: 10px 0;
    color: #303133;
    display: flex;
    align-items: center;
    font-size: 13px;
    .page-btn{
      border: none;
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      min-width: 30px;
      border-radius: 2px;
      height: 26px;
      line-height: 26px;
      vertical-align: top;
      box-sizing: border-box;
      cursor: pointer;
      outline: none;
      &:disabled{
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
    .page-list{
      .page-number{
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
        height: 26px;
        line-height: 26px;
        vertical-align: top;
        box-sizing: border-box;
        text-align: center;
        &.active{
          background-color: #80bd01;
          color: #fff;
        }
      }
    }
`

export const LoginWrapper = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  .login-title{
    color: #555;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .login-input{
    box-sizing: border-box;
    border: 1px solid #c1c1c1;
    border-radius: 3px;
    padding: 5px 10px;
    width: 90%;
    height: 38px;
    margin-bottom: 10px;
    color: #333;
    outline: none;
    ::-webkit-input-placeholder {
      color: pink;
    }
   
  }
  .login-submit{
    display: block;
    outline: none;
    font-size: 14px;
    line-height: 2em;
    padding: 3px 10px;
    border: none;
    background: #5bc0de;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover{
      background: #2f96b4;
    }
  }
`

export const AdvertiseWrap = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
`

export const AdvertiseItem = styled.a`
  display: block;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`


