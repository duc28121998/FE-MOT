import styled from 'styled-components'
import { Input } from 'antd'
import { Collapse } from 'antd'
export const DivAccount = styled.div`
  margin-left: 120px;
  padding-top: 120px;
  .account {
    &__title {
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 112px;
        line-height: 112px;
      }
    }
    &__dangxuat {
      display: flex;
      h5 {
        margin-left: 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
    }
    &__xoataikhoan {
      display: flex;
      h5 {
        margin-left: 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
    }
    &__list {
      padding-top: 40px;
    }
    &__matcuoi {
      /* width: 85px;
      height: 85px; */
    }
    &__table {
      &-title {
        display: flex;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
        }
        border-bottom: 2px solid black;
      }
      &-tinhtrang {
        display: flex;
        justify-content: space-between;
      }
      &-desc {
        display: flex;
        padding-top: 10px;
        padding-bottom: 19px;
        h5 {
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 27px;
        }
      }
      &-in {
        background-color: #ebeded;
        padding: 20px;
      }
      border-bottom: 2px solid black;
    }
  }

  .ant-form-item-control-input-content {
    p {
      color: grey;
      padding-top: 14px;
      padding-bottom: 12px;
    }
  }
  .ant-btn {
    border-radius: 24px;
    padding: 10px 40px 35px;
    border-color: black;
    color: black;
    margin-bottom: 50px;
    font-size: 17px;
  }
  @media screen and (max-width: 599px) {
    margin-left: 8px;
    padding-top: 90px;
    .account {
      &__title {
        h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 56px;
          line-height: 56px;
        }
      }
      &__list {
      }
      &__matcuoi {
        /* width: 85px;
      height: 85px; */
      }
      &__table {
        &-title {
          display: flex;
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
          }
          border-bottom: 2px solid black;
        }
        &-tinhtrang {
          display: flex;
          justify-content: space-between;
        }
        &-desc {
          display: flex;
          padding-top: 10px;
          padding-bottom: 19px;
          h5 {
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 27px;
          }
        }
        &-in {
          background-color: #ebeded;
          padding: 20px;
        }
        border-bottom: 2px solid black;
      }
    }

    .ant-form-item-control-input-content {
      p {
        color: grey;
        padding-top: 14px;
        padding-bottom: 12px;
      }
    }
    .ant-btn {
      border-radius: 24px;
      padding: 10px 40px 35px;
      border-color: black;
      color: black;
      margin-bottom: 50px;
      font-size: 17px;
    }
  }
`
export const DivInput = styled(Input)`
  border: none;
  border-bottom: 2px solid black;
  border-color: black;
  outline: none;
  border-radius: none;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: black;
  :focus {
    box-shadow: none;
    border-color: black;
  }
  ::placeholder {
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 27px;
  }

  padding: 4px 0px;
`

export const DivCollapseAccount = styled(Collapse)`
  background-color: white;
  border: none;

  .account__table-in {
    background-color: #ebeded;
  }

  .account__table-desc {
    border-bottom: 2px solid black;
  }
  .account__table-button {
    button {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 27px;
      border: 1px solid black;
      margin-right: 20px;
      margin-top: 20px;
      width: 204px;
      height: 48px;
      border-radius: 24px;
    }
  }

  .ant-collapse-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none !important;
    color: black !important;
    font-weight: bold !important;
  }
`
