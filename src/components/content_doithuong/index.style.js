import styled from 'styled-components'

export const DivDoiThuong = styled.div`
  .giaydoithuong {
    width: 1260px;
    height: 840px;
    margin: 0px 0px 150px 180px;
    padding-top: 120px;
    // position: relative;
    &__sanpham {
      width: 360px;
      height: 840px;
      padding: 70px 50px 30px 0px;
      img {
        width: 360px;
        height: 240px;
      }
    }
    &__trang {
      width: 360px;
      height: 63px;
      padding: 16px 0px 80px 0px;
      font-weight: bold;
      font-size: 17px;
      line-height: 27px;
      color: #111820;
    }
    &__vang {
      width: 360px;
      height: 63px;
      padding: 16px 0px 80px 0px;
      font-weight: bold;
      font-size: 17px;
      line-height: 27px;
      color: #111820;
    }
    &__color {
      width: 24px;
      height: 24px;
      background: #ebeded;
      border-radius: 50%;
      margin-top: 12px;
      margin-right: 15px;
      &-red {
        background: red;
      }
    }
    &__background {
      width: 720px;
      height: 840px;
      background-color: #b83d24;
      // position: relative;
      img {
        width: 486px;
        height: 607px;
        position: absolute;
        margin: 139px 119px 94px 130px;
      }
    }
    &__title {
      position: absolute;
      height: 560px;
      padding: 630px 244px 115px 160px;
      font-family: 'Lab Grotesque VN';
      font-style: normal;
      font-weight: 300;
      font-size: 64px;
      line-height: 68px;
      color: #ffffff;
    }
    &__p {
      position: absolute;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 27px;
      color: #ffffff;

      padding: 765px 369px 80px 165px;
    }
  }
  @media screen and (max-width: 1368px) {
    .giaydoithuong {
      width: 1240px;
      height: 840px;
      margin: 0px 0px 150px 100px;
      padding-top: 120px;
      // position: relative;
      &__sanpham {
        width: 360px;
        height: 840px;
        padding: 70px 50px 30px 0px;
        img {
          width: 360px;
          height: 240px;
        }
      }
      &__trang {
        width: 360px;
        height: 63px;
        padding: 16px 0px 80px 0px;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
      &__vang {
        width: 360px;
        height: 63px;
        padding: 16px 0px 80px 0px;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }
      &__color {
        width: 24px;
        height: 24px;
        background: #ebeded;
        border-radius: 50%;
        margin-top: 12px;
        margin-right: 15px;
        &-red {
          background: red;
        }
      }
      &__background {
        width: 720px;
        height: 840px;
        background-color: #b83d24;
        // position: relative;
        img {
          width: 486px;
          height: 607px;
          position: absolute;
          margin: 139px 119px 94px 130px;
        }
      }
      &__title {
        position: absolute;
        height: 560px;
        padding: 630px 244px 115px 160px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: 300;
        font-size: 64px;
        line-height: 68px;
        color: #ffffff;
      }
      &__p {
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 27px;
        color: #ffffff;

        padding: 765px 369px 80px 165px;
      }
    }
  }
  @media screen and(max-width : 599px) {
    .giaydoithuong {
      width: 375px;
      height: 1086px;
      margin: 0px;
      padding-top: 70px;
      &__sanpham {
        width: 279px;
        height: 264px;
        padding: 0px 48px 56px 48px;
        img {
          width: 279px;
          height: 186px;
        }
      }
      &__trang {
        width: 279px;
        height: 22px;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        color: #111820;
        padding-bottom: 56px;
      }
      &__vang {
        width: 279px;
        height: 22px;
        font-weight: bold;
        font-style: normal;
        font-size: 15px;
        line-height: 22px;
        color: #111820;
        padding-bottom: 80px;
      }
      &__color {
        width: 24px;
        height: 24px;
        background: #ebeded;
        border-radius: 50%;
        margin-top: 10px;
      }
      &__background {
        width: 375px;
        height: 438px;
        background-color: #b83d24;
        position: relative;
        margin-top: 400px;
        padding-bottom: 80px !important;

        img {
          width: 253px;
          height: 316px;
          position: absolute;
          margin: 74px 61px 48px 61px;
        }
      }
      &__title {
        position: absolute;
        width: 280px;
        height: 80px;
        padding: 323px 20px 58px 80px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 40px;
        color: #ffffff;
      }
      &__p {
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #ffffff;
        padding: 405px 40px 32px 80px;
      }
    }
  }
  @media screen and(max-width: 380px) {
    .mobile-giaydoithuong {
      width: 100%;
      height: 1140px;
      margin: 0px;
      padding-top: 0px;
      &__sanpham {
        width: 100%;
        height: 264px;
        padding: 0px 48px 56px 40px;
        img {
          width: 279px;
          height: 186px;
          margin-top: 56px;
        }
      }
      &__trang {
        width: 279px;
        height: 22px;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        color: #111820;
        padding-bottom: 56px;
      }
      &__vang {
        width: 279px;
        height: 22px;
        font-weight: bold;
        font-style: normal;
        font-size: 15px;
        line-height: 22px;
        color: #111820;
        padding-bottom: 80px;
      }
      &__color {
        width: 24px;
        height: 24px;
        background: #ebeded;
        border-radius: 50%;
        margin-top: 10px;
      }
      &__background {
        width: 100%;
        height: 438px;
        background-color: #b83d24;
        position: relative;
        margin-top: 80px;
        padding-bottom: 80px !important;

        img {
          width: 253px;
          height: 316px;
          position: absolute;
          margin: 74px 61px 48px 61px;
        }
      }
      &__title {
        position: absolute;
        width: 280px;
        height: 80px;
        padding: 323px 20px 58px 80px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 40px;
        color: #ffffff;
      }
      &__p {
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #ffffff;
        padding: 405px 40px 32px 80px;
      }
    }
  }
`

export const DivMobileDoithuong = styled.div`
  .mobile-giaydoithuong {
    width: 100%;
    height: 1140px;
    margin: 0px;
    padding-top: 0px;
    &__sanpham {
      width: 100%;
      height: 264px;
      padding: 0px 48px 56px 74px;
      img {
        width: 279px;
        height: 186px;
        margin-top: 56px;
      }
    }
    &__trang {
      width: 279px;
      height: 22px;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      color: #111820;
      padding-bottom: 56px;
    }
    &__vang {
      width: 279px;
      height: 22px;
      font-weight: bold;
      font-style: normal;
      font-size: 15px;
      line-height: 22px;
      color: #111820;
      padding-bottom: 80px;
    }
    &__color {
      width: 24px;
      height: 24px;
      background: #ebeded;
      border-radius: 50%;
      margin-top: 10px;
    }
    &__background {
      width: 100%;
      height: 438px;
      background-color: #b83d24;
      position: relative;
      margin-top: 80px;
      padding-bottom: 80px !important;

      img {
        width: 253px;
        height: 316px;
        position: absolute;
        margin: 74px 61px 48px 61px;
      }
    }
    &__title {
      position: absolute;
      width: 280px;
      height: 80px;
      padding: 323px 20px 58px 80px;
      font-family: 'Lab Grotesque VN';
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 40px;
      color: #ffffff;
    }
    &__p {
      position: absolute;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #ffffff;
      padding: 405px 40px 32px 80px;
    }
  }
`
