import styled from 'styled-components'
import { Badge } from 'antd'
export const DivHeader = styled.div`
  background: ${(props) => (props.active ? '' : 'white')};
  position: absolute;
  z-index: 2;
  height: 100px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */
  .main-nav {
    &__menu {
      width: 46px;
      height: 46px;
      cursor: pointer;
    }
  }
  @media screen and(max-width: 599px) {
    background: ${(props) => (props.active ? '' : 'white')};
    position: absolute;
    z-index: 2;
    height: 50px;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: fixed; */
    .main-nav {
      &__menu {
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
`
export const DivBadge = styled(Badge)`
  .ant-badge-count {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 2px;
    color: #fff;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: none;
    border-radius: none;
    box-shadow: 0 0 0 0px #fff;
    outline: none;
  }
  @media screen and(max-width: 599px) {
    .ant-badge-count {
      z-index: auto;
      min-width: 2px;
      height: 20px;
      padding: 0 2px;
      color: #fff;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      /* white-space: nowrap; */
      text-align: center;
      background: none;
      border-radius: none;
      box-shadow: 0 0 0 0px #fff;
      outline: none;
    }
  }
`
