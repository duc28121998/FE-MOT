import React from 'react'
import './doimoitest.scss'
import giaydo from '../../assets/images/shop/giaydo.png'
// import bgxanh from '../../assets/images/shop/gbxanh.png'
import giay from '../../assets/images/shop/giay.png'
import giayden from '../../assets/images/shop/Group 2 Copy.png'
import { isMobile } from 'react-device-detect'
// import { DivdoimoiMobile } from './doimoi.style'
import DoimoiMobile from './doimoitestMobile'
import './doimoi.style'
const Doimoitest = () => {
  if (isMobile) return <DoimoiMobile />
  // // neu la mobile thi render ra cai nay
  // if (isTablet) return <DoimoiTablet />
  return (
    <div className="doimoi row">
      <div className="doimoi__trai col-xl-7 col-md-7 ">
        <div className="doimoi__trai-image">
          <img src={giay} alt="" />
        </div>
        <div className="doimoi__trai-text">
          <h2>Một đôi Đời-mới</h2>
          <h5>đời mới êm đềm</h5>
        </div>
      </div>
      <div className="doimoi__phai col-xl-5 col-md-5 ">
        <div className="doimoi__phai-tren">
          <div className="doimoi__phai-image">
            <img src={giayden} alt="" />
          </div>
          <div className="d-flex doimoi__phai-text">
            <div className="mr-auto p-2">da Đời-mới</div>
            <div className="p-2">1 470 000 VNĐ</div>
          </div>
          <div className="abc">
            <div className="doimoi__phai-color doimoi__phai-color-den"></div>
            <div className="doimoi__phai-color doimoi__phai-color-xam"></div>
          </div>
        </div>
        <div className="doimoi__phai-duoi">
          <div className="doimoi__phai-image">
            <img src={giaydo} alt="" />
          </div>
          <div className="d-flex doimoi__phai-text">
            <div className="mr-auto p-2">quá đỏ</div>
            <div className="p-2">720 000 VNĐ</div>
          </div>
          <div className="abc">
            <div className="doimoi__phai-color doimoi__phai-color-do"></div>
            <div className="doimoi__phai-color doimoi__phai-color-vang"></div>
            <div className="doimoi__phai-color doimoi__phai-color-xam"></div>
            <div className="doimoi__phai-color doimoi__phai-color-trang"></div>
            <div className="doimoi__phai-color doimoi__phai-color-tim"></div>
            <div className="doimoi__phai-color doimoi__phai-color-dentrang"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doimoitest
