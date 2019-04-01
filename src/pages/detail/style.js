import styled from 'styled-components'

export const AritcleWrapper = styled.div`
`

export const AritcleHeader = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    .top-wrap{
        display: flex;
        align-items: center;
        .topic-type{
            background: #80bd01;
            padding: 2px 4px;
            border-radius: 3px;
            color: #fff;
            font-size: 12px;
            margin-right: 10px;
        }
        .topic-title{
            font-size: 20px;
            font-weight: 700;
            margin: 8px 0;
            display: inline-block;
            vertical-align: bottom;
            width: 75%;
            line-height: 130%;
        }
    }
    .other-wrap{
        display: flex;
        align-center;
        .other-item{
            padding-right: 16px;
            font-size: 12px;
            color: #838383;
        }
    }
`

export const AritcleContent = styled.div`
    padding: 0 20px;
    .markdown-text {
        &:first-child {
           margin-top: 0;
        }
        a {
           color: #08c;
        }
        img {
           height: auto;
           max-width: 100%;
           vertical-align: middle;
           border: 0;
        }
        p {
          font-size: 15px;
          line-height: 1.7em;
          overflow: auto;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin: 1em 0;
        }
        blockquote {
          padding: 0 0 0 15px;
          margin: 0 0 20px;
          border-left: 5px solid #eee;
          p {
            font-weight: 300;
          }
        }
        h2 {
          font-size: 26px;
        }
        h1,h2,h3,h4,h5,h6 {
          margin: 30px 0 15px;
          border-bottom: 1px solid #eee;
        }
        ol,ul {
          padding: 0;
          margin: 0 0 10px 25px;
          li {
            font-size: 14px;
          }
        }
        pre.prettyprint {
          font-size: 14px;
          border-radius: 0;
          padding: 10px 15px;
          border: none;
          margin: 20px -10px;
          border-width: 1px 0;
          background: #f7f7f7;
          tab-size: 4;
        }
        code {
          color: inherit;
          white-space: pre-wrap;
          background-color: transparent;
          padding: 0;
          border: 0;
          font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
          font-size: 12px;
          border-radius: 3px;
        }
      }
`

export const CommentWrapper = styled.div`
`

export const CommentHeader = styled.div`
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
`

export const CommentContent = styled.div`
    .comment-item{
        padding-right: 10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        &.line-height{
            background-color: #f4fcf0;
        }
    }  
`