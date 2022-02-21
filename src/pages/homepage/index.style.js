import { Tabs } from 'antd'
import styled from 'styled-components'

export const DivMediaTab = styled(Tabs)`
  margin-left: 120px;
  margin-top: 850px;
  border-top: 2px solid black;
  .ant-tabs-tab {
    margin-top: 12px;
    font-style: normal;
    font-weight: 900;
    font-size: 27px;
    line-height: 35px;
    color: #111820;
  }
  .ant-tabs-tabpane {
    flex: none;
    width: 100%;
    outline: none;
    padding-bottom: 200px;
  }
  @media screen and (max-width: 1367px) {
    margin-left: 120px;
    margin-top: 850px;
    border-top: 2px solid black;
    .ant-tabs-tab {
      font-style: normal;
      font-weight: 900;
      font-size: 27px;
      line-height: 35px;
      color: #111820;
    }
  }
  @media screen and (max-width: 599px) {
    margin-left: 32px;
    margin-top: 550px;
    border-top: 2px solid black;
    .ant-tabs-tab {
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 35px;
      color: black;
      svg {
        width: 45px;
      }
    }
  }
  @media screen and (max-width: 380px) {
    margin-left: 8px;
    .ant-tabs-tab {
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 35px;
      color: black;
      svg {
        width: 45px;
      }
    }
  }
`
