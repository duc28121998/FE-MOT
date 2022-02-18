import styled from 'styled-components'
import { Input } from 'antd'

//CHECKOUT
export const DivCheckout = styled.div`
  .checkout {
    &__trai {
      background-color: #ebeded;
      width: 100%;
      padding-top: 150px;
      margin-top: 0px;
      h1 {
        background-color: #111820;
      }
      h2 {
        background-color: blue;
      }
      img {
        width: 120px;
        height: 80px;
        margin: 24px;
      }
      &-gia {
        padding: 20px;
        h5 {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          strong {
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 27px;
            color: #111820;
          }
        }
      }
      &-thanhtoan {
        padding: 5px 20px;
        h5 {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          color: #111820;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          color: #7d868c;
        }
      }
      &-rectangle {
        width: 96%;
        border-top: 1px solid black;
        font-weight: bold;
        /* margin-left: 20px; */
      }
    }
    &__phai {
      padding-top: 150px;
      padding-left: 241px;
      h5 {
        font-style: normal;
        font-weight: 900;
        font-size: 27px;
        line-height: 35px;
        color: #111820;
      }
      &-dangnhap {
        display: flex;
        button {
          margin-right: 182px;
          border: none;
          a {
            background-color: black;
            color: white;
            border-radius: 24px;
            font-family: 'Lab Grotesque VN';
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 27px;
            padding: 11px 40px 11px;
            height: 48px;
          }
        }
      }
      .aaaa a {
        margin-left: 0px;
        /*  */
      }
      &-button {
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
      &-vanglai {
        h5 {
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #7d868c;
        }
      }
    }

    .aaaa {
      display: flex;
      a {
        /* margin: 0 auto; */
        padding-top: 12px;
        margin-left: 210px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #111820;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 1368px) {
    .checkout {
      &__trai {
        background-color: #ebeded;
        width: 100%;
        padding-top: 150px;
        margin-top: 0px;
        h1 {
          background-color: #111820;
        }
        h2 {
          background-color: blue;
        }
        img {
          width: 120px;
          height: 80px;
          margin: 24px;
        }
        &-gia {
          padding: 20px;
          h5 {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 27px;
            color: #111820;
            strong {
              font-style: normal;
              font-weight: bold;
              font-size: 17px;
              line-height: 27px;
              color: #111820;
            }
          }
        }
        &-thanhtoan {
          padding: 5px 20px;
          h5 {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            color: #111820;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            color: #7d868c;
          }
        }
        &-rectangle {
          width: 96%;
          border-top: 1px solid black;
          font-weight: bold;
          /* margin-left: 20px; */
        }
      }
      &__phai {
        padding-top: 120px;
        padding-left: 200px;
        h5 {
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
        &-dangnhap {
          display: flex;
          button {
            margin-right: 170px;
            border: none;
            a {
              background-color: black;
              color: white;
              border-radius: 24px;
              font-family: 'Lab Grotesque VN';
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 27px;
              padding: 11px 25px 11px;

              height: 48px;
            }
          }
        }
        .aaaa a {
          margin-left: 0px;
          /*  */
        }
        &-button {
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
        &-vanglai {
          h5 {
            font-style: normal;
            font-weight: 900;
            font-size: 27px;
            line-height: 35px;
            color: #111820;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: #7d868c;
          }
        }
      }
    }
  }
  @media screen and (max-width: 599px) {
    .checkout {
      &__phai {
        padding-top: 100px;
        padding-left: 16px;
        padding-right: 16px;
        h5 {
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
        &-dangnhap {
          display: flex;
          button {
            margin-right: 182px;
            border: none;
            a {
              background-color: black;
              color: white;
              border-radius: 24px;
              font-family: 'Lab Grotesque VN';
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 27px;
              padding: 11px 40px 11px;

              height: 48px;
            }
          }
        }
        .aaaa a {
          margin-left: 0px;
          /*  */
        }
        &-button {
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
        &-vanglai {
          h5 {
            font-style: normal;
            font-weight: 900;
            font-size: 27px;
            line-height: 35px;
            color: #111820;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: #7d868c;
          }
        }
        &-dangnhap {
          display: flex;
          button {
            margin-right: 170px;
            border: none;
            a {
              background-color: black;
              color: white;
              border-radius: 24px;
              font-family: 'Lab Grotesque VN';
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 27px;
              padding: 11px 25px 11px;

              height: 48px;
            }
          }
        }
      }

      .aaaa {
        display: flex;
        a {
          /* margin: 0 auto; */
          padding-top: 12px;
          margin-left: 210px;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #111820;
          cursor: pointer;
        }
      }
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
export const DivCheckoutMobile = styled.div`
  background-color: yellow;
  width: 100%;
`

//CHECKOUT-STEP1 :
export const DivCheckoutStep1 = styled.div`
  .checkoutstep1 {
    &__trai {
      background-color: #ebeded;
      width: 100%;
      padding-top: 150px;
      margin-top: 0px;
      h1 {
        background-color: #111820;
      }
      h2 {
        background-color: blue;
      }
      img {
        width: 120px;
        height: 80px;
        margin: 24px;
      }
      &-gia {
        padding: 20px;
        h5 {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          strong {
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 27px;
            color: #111820;
          }
        }
      }
      &-thanhtoan {
        padding: 5px 20px;
        h5 {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          color: #111820;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          color: #7d868c;
        }
      }
      &-rectangle {
        width: 96%;
        border-top: 1px solid black;
        font-weight: bold;
        /* margin-left: 20px; */
      }
    }
    &__phai {
      padding-top: 150px;
      padding-left: 241px;
      &-dangnhap {
        display: flex;
        button {
          background-color: black;
          color: white;
          border-radius: 24px;
          font-family: 'Lab Grotesque VN';
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 27px;
          padding: 11px 40px 11px;
          height: 48px;
        }
      }
      &-button {
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
      &-table {
        .ant-pagination {
          display: none;
        }
        padding-right: 50px;
      }
      .ant-btn-primary {
        border-color: black;
        background-color: black;
        color: white;
        width: 135px;
        height: 48px;
        border-radius: 24px;
        margin-top: 20px;
        font-size: 17px;
        line-height: 27px;
      }
      .ant-btn {
        /* color: black; */
        border-color: black;
        width: 135px;
        height: 48px;
        border-radius: 24px;
        font-size: 17px;
        line-height: 27px;
      }
    }
    //BUOC4
    &__buoc4 {
      display: flex;
      p {
        margin-right: 38px;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 27px;
        color: #7d868c;
      }
      strong {
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
      h5 {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
    }
    //CONTENT1
    &__content1 {
      h4 {
        font-style: normal;
        font-weight: 900;
        font-size: 27px;
        line-height: 35px;
        color: #111820;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 27px;
        color: #7d868c;
        strong {
          color: black;
          margin-left: 10px;
        }
      }
      .ant-input {
        width: 480px;
        /* margin-right: 150px; */
        border: none;
        border-bottom: 2px solid black;
        margin-bottom: 20px;
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
        :hover {
          background: none;
        }
        ::placeholder {
          color: black;
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
        }
      }
      .ant-select-selector {
        width: 180px;
        height: 40px;
        margin-right: 15px;
        border-color: white;
        border-bottom: 2px solid black;
        bottom: 3px;
        /* margin-bottom: 50px; */
        /* padding-right: 10; */
        ::after {
          border-color: white !important;
        }
      }
      .ant-select-selection-item {
        padding: 5px;
        padding-left: 0px !important;
        padding-right: 0px;
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
        padding-left: 10px;
      }
      .ant-select-arrow {
        color: black;
        padding-right: 20px;
      }

      //TABLE GR3 :
      .table {
        /* width: 550px; */
        /* width: 50%; */
        max-width: none;
        width: 60%;
        tbody {
          tr {
            td {
              border: 1px solid #7d868c;
              text-align: left;
              justify-content: center;
              padding-left: 20px;
              font-family: 'Lab Grotesque VN';
              font-style: normal;
              font-weight: bold;
              font-size: 17px;
              line-height: 27px;
              align-items: center;
              color: #111820;
            }
          }
        }
        tbody tr td:hover {
          border: 2px solid black;
          cursor: pointer;
        }
      }
    }

    //TABLE :
    &__table {
      h5 {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
        margin-bottom: 0px;
      }
    }
  }
  //STEPS
  .ant-steps {
    padding-right: 61px;
  }
  .ant-steps-item {
    height: 120px;
    &-title {
      h1 {
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: bold;
        font-size: 112px;
        line-height: 112px;
        color: #b7bfc5;
      }
    }
  }
  .ant-steps-item-active {
    h1 {
      color: black !important;
    }
  }
  .ant-steps-item-icon {
    display: none;
  }
  .ant-steps-item-title::after {
    position: absolute;
    top: 50px;
    left: 100%;
    display: block;
    width: 9999px;
    height: 5px;
    background: #b7bfc5;
    content: '';
    font-weight: bold;
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background-color: black;
  }
  //TABLE
  .ant-table-content {
    width: 480px;
  }

  //RESPONSIVE MOBILE :
  @media screen and (max-width: 599px) {
    .checkoutstep1 {
      &__trai {
        background-color: #ebeded;
        width: 100%;
        padding-top: 150px;
        margin-top: 0px;
        h1 {
          background-color: #111820;
        }
        h2 {
          background-color: blue;
        }
        img {
          width: 120px;
          height: 80px;
          margin: 24px;
        }
        &-gia {
          padding: 20px;
          h5 {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 27px;
            color: #111820;
            strong {
              font-style: normal;
              font-weight: bold;
              font-size: 17px;
              line-height: 27px;
              color: #111820;
            }
          }
        }
        &-thanhtoan {
          padding: 5px 20px;
          h5 {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            color: #111820;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            color: #7d868c;
          }
        }
        &-rectangle {
          width: 96%;
          border-top: 1px solid black;
          font-weight: bold;
          /* margin-left: 20px; */
        }
      }
      &__phai {
        padding-top: 100px;
        padding-left: 16px;
        &-dangnhap {
          display: flex;
          button {
            background-color: black;
            color: white;
            border-radius: 24px;
            font-family: 'Lab Grotesque VN';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 27px;
            padding: 11px 40px 11px;
            height: 48px;
          }
        }
        &-button {
          button {
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 27px;
            border: 1px solid black;
            margin-right: 20px;
            margin-top: 20px;
            width: 150px;
            height: 48px;
            border-radius: 24px;
          }
        }
        &-table {
          .ant-pagination {
            display: none;
          }
          padding-right: 50px;
        }
        .ant-btn-primary {
          border-color: black;
          background-color: black;
          color: white;
          width: 135px;
          height: 48px;
          border-radius: 24px;
          margin-top: 20px;
          font-size: 17px;
          line-height: 27px;
        }
        .ant-btn {
          /* color: black; */
          border-color: black;
          width: 135px;
          height: 48px;
          border-radius: 24px;
          font-size: 17px;
          line-height: 27px;
        }
      }
      //CONTENT1
      &__content1 {
        h4 {
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 27px;
          color: #7d868c;
          strong {
            color: black;
            margin-left: 10px;
          }
        }
        .ant-input {
          width: 480px;
          /* margin-right: 150px; */
          border: none;
          border-bottom: 2px solid black;
          margin-bottom: 20px;
          color: black;
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          :hover {
            background: none;
          }
          ::placeholder {
            color: black;
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 27px;
            color: #111820;
          }
        }
        .ant-select-selector {
          width: 180px;
          height: 40px;
          margin-right: 15px;
          border-color: white;
          border-bottom: 2px solid black;
          bottom: 3px;
          /* margin-bottom: 50px; */
          /* padding-right: 10; */
          ::after {
            border-color: white !important;
          }
        }
        .ant-select-selection-item {
          padding: 5px;
          padding-left: 0px !important;
          padding-right: 0px;
          color: black;
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          padding-left: 10px;
        }
        .ant-select-arrow {
          color: black;
          padding-right: 20px;
        }

        //TABLE GR3 :
        .table {
          /* width: 550px; */
          /* width: 50%; */
          max-width: none;
          width: 60%;
          tbody {
            tr {
              td {
                border: 1px solid #7d868c;
                text-align: left;
                justify-content: center;
                padding-left: 20px;
                font-family: 'Lab Grotesque VN';
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: 27px;
                align-items: center;
                color: #111820;
              }
            }
          }
          tbody tr td:hover {
            border: 2px solid black;
            cursor: pointer;
          }
        }
      }

      //TABLE :
      &__table {
        h5 {
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          margin-bottom: 0px;
        }
      }
    }
    //STEPS
    .ant-steps {
      padding-right: 20px;
    }
    .ant-steps-item {
      height: 80px;
      &-title {
        h1 {
          font-family: 'Lab Grotesque VN';
          font-style: normal;
          font-weight: bold;
          font-size: 60px;
          line-height: 60px;
          color: #b7bfc5;
        }
      }
    }
    .ant-steps-item-active {
      h1 {
        color: black !important;
      }
    }
    .ant-steps-item-icon {
      display: none;
    }
    .ant-steps-item-title::after {
      position: absolute;
      top: 50px;
      left: 100%;
      display: block;
      width: 375px;
      height: 5px;
      background: #b7bfc5;
      content: '';
      font-weight: bold;
    }
    .ant-steps-item-finish
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title::after {
      background-color: black;
    }
    //TABLE
    .ant-table-content {
      width: 375px;
    }
  }
`
