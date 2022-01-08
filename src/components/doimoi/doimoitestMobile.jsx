import React from 'react'
import { DivdoimoiMobile } from './doimoi.style'
import giaydo from '../../assets/images/shop/giaydo.png'
import giay from '../../assets/images/shop/giay.png'
import giayden from '../../assets/images/shop/Group 2 Copy.png'
const doimoitestMobile = () => {
  return (
    <DivdoimoiMobile>
      <div className="doimoi-mobile">
        <div className="doimoi-mobile__trai ">
          <div className="doimoi-mobile__trai-image">
            <img src={giay} alt="" />
          </div>
          <div className="doimoi-mobile__trai-text">
            <h2>
              Một đôi <br /> Đời-mới
            </h2>
            <h5>đời mới êm đềm</h5>
          </div>
        </div>
        <div className="doimoi-mobile__phai ">
          <div className="doimoi-mobile__phai-tren">
            <div className="doimoi-mobile__phai-image">
              <img src={giayden} alt="" />
            </div>
            <div className="d-flex doimoi-mobile__phai-text">
              <div className="mr-auto p-2">da Đời-mới</div>
              <div className="p-2">1 470 000 VNĐ</div>
            </div>
            <div className="abc">
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-den"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-xam"></div>
            </div>
          </div>
          <div className="doimoi-mobile__phai-duoi">
            <div className="doimoi-mobile__phai-image">
              <img src={giaydo} alt="" />
            </div>
            <div className="d-flex doimoi-mobile__phai-text">
              <div class="mr-auto p-2">quá đỏ</div>
              <div class="p-2">720 000 VNĐ</div>
            </div>
            <div className="abc">
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-do"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-vang"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-xam"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-trang"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-tim"></div>
              <div className="doimoi-mobile__phai-color doimoi-mobile__phai-color-dentrang"></div>
            </div>
          </div>
        </div>
      </div>
    </DivdoimoiMobile>
  )
}

export default doimoitestMobile
