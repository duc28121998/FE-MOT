import styled from 'styled-components'
import { Collapse } from 'antd'
import { Tabs } from 'antd'
const { Panel } = Collapse

export const DivThacmac = styled.div`
  width: 100%;
  .thacmac {
    width: 100%;
    &__title {
      /* padding: 120px; */
      padding-top: 200px;
      padding-left: 120px;
    }
    &__rectangle {
      width: 40px;
      height: 4px;
      margin-top: 120px;
      background: #111820;
    }
    &__banhoi {
      h1 {
        width: 219px;
        height: 224px;
        font-style: normal;
        font-weight: bold;
        font-size: 112px;
        line-height: 112px;
        color: #111820;
      }
    }
    &__mot {
      h1 {
        width: 354px;
        height: 224px;
        font-style: normal;
        font-weight: bold;
        font-size: 112px;
        line-height: 112px;
        color: #111820;
      }
    }
    &__list {
      margin-left: 120px;
      border-top: 1px solid black;
      &-trai {
        h3 {
          margin-top: 20px;
          width: 314px;
          height: 48px;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 48px;
          color: #111820;
        }
      }
      &-phai {
        margin-top: 20px;
        font-size: 40px;
        line-height: 48px;
        img {
          width: 46px;
          height: 46px;
        }
      }
    }

    //INLIST COLLAPSE
    &__inlist {
      margin-left: 110px;
      border-top: 1px solid black;
      &-mot {
        h4 {
          margin-top: 20px;
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
      }
      &-hai {
        h4 {
          margin-top: 20px;
          font-style: normal;
          font-weight: 900;
          font-size: 27px;
          line-height: 35px;
          color: #111820;
        }
      }
      &-ba {
        .dochan {
          width: 100%;
          display: flex;
          padding-top: 20px;
          img {
            width: 290px;
            height: 193px;
            margin-right: 0px;
          }
        }
        p {
          margin-top: 20px;
          font-style: normal;
          /* font-weight: bold; */
          font-size: 17px;
          line-height: 27px;
          color: #111820;
          margin-bottom: 15px;
        }
      }
      &-lienhe {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        color: #111820;
      }
    }
  }
`
export const DivTabs = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black !important;
  }
  .ant-tabs {
    &-tab {
      padding: 0px !important;

      &-btn {
        font-style: normal;
        font-weight: 900;
        font-size: 27px;
        line-height: 35px;
        color: #b8babc;
      }
    }
  }
  .ant-col {
    &-sizenu {
      font-weight: 900;
      font-size: 27px;
      line-height: 35px;
      color: #111820;
      &-img1 {
        width: 326p;
        height: 36.5px;
        margin-bottom: 40.5px;
      }
      &-img2 {
        width: 600px;
        height: 419px;
      }
      &-img3 {
        width: 414px;
        height: 36.5px;
        margin-bottom: 40.5px;
        margin-top: 64px;
      }
    }
  }
`
export const DivCollapse = styled(Collapse)`
  .ant {
    &-collapse {
      margin-left: 120px;

      border: none;
      border-bottom: 0;
      border-radius: 0;
      &-header {
        border: none;
        background-color: white;
      }
      .inlist {
        background-color: #fafafa;
      }
      &-item {
        border-bottom: none !important;
      }
    }
  }
`

export const DivCollapseHeader = styled(Collapse)`
  background-color: transparent;
  border: none !important;
  .ant-collapse-arrow {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    font-weight: bold;
  }

  @media screen and (max-width: 599px) {
    .ant-collapse-arrow {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      color: #fff;
      font-weight: normal;
    }
    .ant-collapse {
      background-color: transparent;
      &-header {
        border-top: 1px solid black !important;
        border-radius: none !important;
        background-color: none !important;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: #111820;
        margin-left: 16px;
        padding: 12px 0px !important;
        background: none !important;
      }
      &-content {
        border-top: none;
      }
      &-item {
        border-bottom: none;
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
  }
`
export const DivPanel = styled(Panel)`
  border: none !important;
  .ant-collapse {
    &-header {
      border-top: ${(props) =>
        !props.active
          ? '2px solid #000 !important'
          : '8px solid #000 !important'};
      border-radius: none !important;
      background-color: none !important;
      border: none;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      color: #111820;
      margin-left: 120px;
      padding: 12px 0px !important;
      background: none !important;
    }
    &-content {
      border-top: none;
    }
    &-item {
      border-bottom: none !important;
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
  @media screen and (max-width: 599px) {
    .ant-collapse-icon-position-right {
      padding: 20px !important;
    }
    .ant-collapse {
      &-header {
        /* border-top: 1px solid black !important; */
        height: 100%;

        border-top: ${(props) =>
          !props.active
            ? '2px solid #000 !important'
            : '8px solid #000 !important'};
        border-radius: none !important;
        background-color: none !important;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 27px;
        line-height: 35px;
        color: #111820;
        margin-left: 16px;
        padding: 12px 0px 40px 0px;
        background: none !important;
      }
      &-content {
        border-top: none;
      }
      &-item {
        border-bottom: none !important;
      }
    }
  }
`

// MOBILE THẮC MẮC :
export const DivThacMacMobile = styled.div`
    .mobile-thacmac {
      width: 100%;
      &__title {
        padding-top: 100px;
        padding-left: 16px;
      }
      &__rectangle {
        width: 40px;
        height: 4px;
        margin-top: 0px;
        margin-bottom: 30px;
        background: #111820;
      }
      &__banhoi {
        h1 {
          width: 100%;
          height: 100%;
          font-style: normal;
          font-weight: bold;
          font-size: 56px;
          line-height: 56px;
        }
      }
      &__mot {
        h1 {
          width: 100%;
          height: 100%;
          font-style: normal;
          font-weight: bold;
          font-size: 56px;
          line-height: 56px;
        }
      }
      &__list {
        margin-left: 16px;
        border-top: 1px solid black;
        &-trai {
          h3 {
            margin-top: 20px;
            width: 100%;
            height: 100%;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 48px;
            color: #111820;
          }
        }
        &-phai {
          margin-top: 20px;
          font-size: 40px;
          line-height: 48px;
          img {
            width: 46px;
            height: 46px;
          }
        }
      }

      //INLIST COLLAPSE
      &__inlist {
        margin-left: 16px;
        border-top: 1px solid black;
        &-mot {
          h4 {
            margin-top: 20px;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
            color: #111820;
          }
        }
        &-hai {
          h4 {
            margin-top: 20px;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 22px;
            color: #111820;
          }
        }
        &-ba {
          .dochan {
            width: 300px;
            padding-top: 20px;
            margin-left: 12px;
            img {
              width: 300px;
              height: 201px;
              /* margin-right: 10px; */
            }
          }
          p {
            margin-top: 20px;
            font-style: normal;
            font-size: 15px;
            line-height: 22px;
            color: #111820;
            padding-bottom: 15px;
          }
      
        }
        &-lienhe {
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 25px;
          color: #111820;
        }
      }
    }
  }
`

export const DivTabsMobile = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black !important;
  }

  .ant-tabs {
    &-tab {
      padding: 0px;
      padding-top: 10px;
      margin-left: 26px;
      &-btn {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        /* margin-left: 10px; */
        color: #b8babc;
      }
    }
  }
  .ant-col {
    &-sizenu {
      font-weight: 900;
      font-size: 27px;
      line-height: 35px;
      color: #111820;
      &-img1 {
        margin-top: 40px;
        width: 250px;
        height: 35px;
        margin-bottom: 40.5px;
      }
      &-img2 {
        width: 343px;
        height: 364px;
      }
      &-img3 {
        width: 320px;
        height: 38px;
        margin-bottom: 40.5px;
        margin-top: 30px;
      }
    }
  }
`
