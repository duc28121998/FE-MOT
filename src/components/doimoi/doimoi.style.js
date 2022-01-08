import styled from 'styled-components'

export const DivdoimoiTablet = styled.div`
  .doimoi {
    width: 500px;
    height: 840px;
    padding-top: 500px;
    //   padding-right: 180px;
    padding-left: 0px;
    display: flex;

    &__trai {
      position: relative;
      background-color: #00416a;
      width: 720px;
      height: 840px;

      &-image {
        position: absolute;
        margin: 139px 119px 139px 115px;
        width: 486px;
        height: 607px;
        img {
          width: 100%;
        }
      }
      &-text {
        position: absolute;
        padding: 589px 336px 115px 160px;
        //   border: 1px solid red;
        h2 {
          width: 224px;
          height: 136px;
          font-family: 'Lab Grotesque VN';
          font-style: normal;
          font-weight: 300;
          font-size: 64px;
          line-height: 68px;
          margin-bottom: 0px !important;

          /* or 106% */

          color: #ffffff;
        }
        h5 {
          font-family: Lab Grotesque VN;
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 27px;
          /* identical to box height, or 159% */
          padding-top: 5px;
          color: #ffffff;
        }
      }
    }
    &__phai {
      padding-right: 180px;
      &-tren {
        width: 360px;
        height: 319px;
        padding: 80px 180px 80px 180px;
      }
      &-image {
        width: 360px;
        height: 240px;
        img {
          width: 100%;
        }
      }
      &-text {
        width: 360px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }

      &-color {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 10px;
        display: flex;
        &-den {
          background-color: #000000;
        }
        &-do {
          background-color: #b83d24;
          border: 4px solid black;
        }
        &-vang {
          background-color: #ffc700;
        }
        &-xam {
          background-color: #adb4b9;
        }
        &-trang {
          background-color: #ebeded;
        }
        &-tim {
          background-color: #6d5093;
        }
        &-dentrang {
          background-color: #12312b;
          transform: rotate(45deg);
        }
        // text-decoration: none;
        // display: inline-block;
      }
      // Dưới
      &-duoi {
        width: 360px;
        height: 319px;
        padding: 80px 180px 80px 180px;
      }
    }
  }

  .abc {
    display: flex;
    width: 360px;
  }
`

export const DivdoimoiMobile = styled.div`
  .doimoi-mobile {
    // width: 375px;
    height: 1090px;
    padding-top: 90px;
    padding-left: 0px;

    &__trai {
      position: relative;
      background-color: #00416a;
      width: 375px;
      height: 438px;

      &-image {
        position: absolute;
        margin: 74px 61px 48px 61px;
        width: 253px;
        height: 316px;
        img {
          width: 100%;
        }
      }
      &-text {
        position: absolute;
        padding: 302px 0px 58px 80px;
        h2 {
          width: 255px;
          height: 80px;
          font-family: 'Lab Grotesque VN';
          font-style: normal;
          font-weight: 300;
          font-size: 36px;
          line-height: 40px;
          color: #ffffff;
        }
        h5 {
          width: 255px;
          height: 22px;
          font-family: 'Lab Grotesque VN';
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 2px;

          color: #ffffff;
        }
      }
    }
    &__phai {
      &-tren {
        width: 275px;
        height: 264px;
        padding: 48px 48px 48px 48px;
      }
      &-image {
        width: 279px;
        height: 186px;
        img {
          width: 100%;
        }
      }
      &-text {
        width: 279px;
        font-family: 'Lab Grotesque VN';
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 27px;
        color: #111820;
      }

      &-color {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 10px;
        display: flex;
        &-den {
          background-color: #000000;
        }
        &-do {
          background-color: #b83d24;
          border: 4px solid black;
        }
        &-vang {
          background-color: #ffc700;
        }
        &-xam {
          background-color: #adb4b9;
        }
        &-trang {
          background-color: #ebeded;
        }
        &-tim {
          background-color: #6d5093;
        }
        &-dentrang {
          background-color: #12312b;
          transform: rotate(45deg);
        }
        // text-decoration: none;
        // display: inline-block;
      }
      // Dưới
      &-duoi {
        width: 279px;
        height: 319px;
        padding: 48px 48px 48px 48px;
      }
    }
  }

  .abc {
    display: flex;
    width: 279px;
  }
`
// export const DivdoimoiDesktop = styled.div`
//   .doimoi {
//     width: 500px;
//     height: 840px;
//     //   padding-right: 180px;
//     padding-left: 0px;
//     display: flex;

//     &__trai {
//       position: relative;
//       background-color: #00416a;
//       width: 720px;
//       height: 840px;

//       &-image {
//         position: absolute;
//         margin: 139px 119px 139px 115px;
//         width: 486px;
//         height: 607px;
//         img {
//           width: 100%;
//         }
//       }
//       &-text {
//         position: absolute;
//         padding: 589px 336px 115px 160px;
//         //   border: 1px solid red;
//         h2 {
//           width: 224px;
//           height: 136px;
//           font-family: 'Lab Grotesque VN';
//           font-style: normal;
//           font-weight: 300;
//           font-size: 64px;
//           line-height: 68px;
//           margin-bottom: 0px !important;

//           /* or 106% */

//           color: #ffffff;
//         }
//         h5 {
//           font-family: Lab Grotesque VN;
//           font-style: normal;
//           font-weight: normal;
//           font-size: 17px;
//           line-height: 27px;
//           /* identical to box height, or 159% */
//           padding-top: 5px;
//           color: #ffffff;
//         }
//       }
//     }
//     &__phai {
//       padding-right: 180px;
//       &-tren {
//         width: 360px;
//         height: 319px;
//         padding: 80px 180px 80px 180px;
//       }
//       &-image {
//         width: 360px;
//         height: 240px;
//         img {
//           width: 100%;
//         }
//       }
//       &-text {
//         width: 360px;
//         font-family: 'Lab Grotesque VN';
//         font-style: normal;
//         font-weight: bold;
//         font-size: 17px;
//         line-height: 27px;
//         color: #111820;
//       }

//       &-color {
//         width: 20px;
//         height: 20px;
//         border-radius: 100%;
//         margin-right: 10px;
//         display: flex;
//         &-den {
//           background-color: #000000;
//         }
//         &-do {
//           background-color: #b83d24;
//           border: 4px solid black;
//         }
//         &-vang {
//           background-color: #ffc700;
//         }
//         &-xam {
//           background-color: #adb4b9;
//         }
//         &-trang {
//           background-color: #ebeded;
//         }
//         &-tim {
//           background-color: #6d5093;
//         }
//         &-dentrang {
//           background-color: #12312b;
//           transform: rotate(45deg);
//         }
//         // text-decoration: none;
//         // display: inline-block;
//       }
//       // Dưới
//       &-duoi {
//         width: 360px;
//         height: 319px;
//         padding: 80px 180px 80px 180px;
//       }
//     }
//   }

//   .abc {
//     display: flex;
//     width: 360px;
//   }
// `
