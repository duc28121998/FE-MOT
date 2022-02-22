import { Modal } from 'antd'
import styled from 'styled-components'
export const DivModal = styled(Modal)`
  .ant-modal {
    &-body {
      background-color: #000;
      color: #fff;
      .header {
        h2 {
          font-size: 64px;
          line-height: 68px;
          font-style: normal;
          font-weight: bold;
          transform: translateY(-40px);
          color: white;
        }
      }
      .sub-title {
      }
    }
    &-close-x {
      background-color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
    }
  }
`
