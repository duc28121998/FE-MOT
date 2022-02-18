import styled from 'styled-components'

export const DivAoMua = styled.div`
  .aomua {
    width: 1260px;
    height: 840px;
    margin: 0px 180px 150px 170px;
    padding-top: 250px;
    &__sanpham {
      width: 360px;
      height: 403px;
      padding: 200px 100px 30px 0px;
      img {
        width: 360px;
        height: 360px;
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
    }
    &__background {
      width: 720px;
      height: 840px;
      background-color: #9a612d;
      position: relative;
      img {
        width: 486px;
        height: 607px;
        position: absolute;
        margin: 139px 119px 94px 130px;
      }
    }
    &__title {
      position: absolute;
      width: 720px;
      height: 560px;
      padding: 700px 20px 115px 160px;
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

      padding: 780px 369px 80px 165px;
    }
  }

  @media screen and (max-width: 1368px) {
    .aomua {
      width: 1240px;
      height: 630px;
      margin: 0px 0px 320px 100px;
      padding-top: 240px;
      &__sanpham {
        width: 360px;
        height: 403px;
        padding: 210px 100px 30px 0px;
        img {
          width: 360px;
          height: 340px;
        }
      }
      &__trang {
        width: 297px;
        height: 40px;
        padding: 12px 0px 60px 0px;
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
        color: #111820;
      }
      &__vang {
        width: 295px;
        height: 40px;
        padding: 12px 0px 60px 0px;
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
        color: #111820;
      }
      &__color {
        width: 24px;
        height: 24px;
        background: #ebeded;
        border-radius: 50%;
        margin-top: 10px;
      }
      &__background {
        width: 540px;
        height: 840px;

        background-color: #9a612d;
        position: relative;
        img {
          width: 486px;
          height: 607px;
          position: absolute;
          margin: 110px 90px 94px 105px;
        }
      }
      &__title {
        position: absolute;
        width: 500px;
        // height: 400px;
        padding: 680px 50px 115px 130px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: 300;
        font-size: 50px;
        line-height: 68px;
        color: #ffffff;
      }
      &__p {
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        padding: 740px 100px 115px 130px;
      }
    }
  }
`

export const DivMobileAoMua = styled.div`
  .aomua {
    width: 100%;
    height: 930px;
    margin: 0px 0px 0px 0px;
    padding-top: 0px;
    &__sanpham {
      width: 279px;
      height: 264px;
      padding: 64px 48px 56px 66px;
      img {
        width: 279px;
        height: auto;
        margin-bottom: 15px;
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
      background-color: #9a612d;
      position: relative;
      margin-top: 50px;

      img {
        width: 253px;
        height: 316px;
        position: absolute;
        margin: 74px 61px 48px 61px;
      }
    }
    &__title {
      position: absolute;
      width: 320px;
      height: 80px;
      padding: 365px 0px 58px 80px;
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
