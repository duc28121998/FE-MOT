import React from 'react'
import { DivdoimoiTablet } from './doimoi.style'
import giaydo from '../../assets/images/shop/giaydo.png'
import giay from '../../assets/images/shop/giay.png'
import giayden from '../../assets/images/shop/Group 2 Copy.png'
const doimoitestTablet = () => {
  return (
    <DivdoimoiTablet>
      <div className="doimoi">
        <div className="doimoi__trai ">
          <div className="doimoi__trai-image">
            <img src={giay} alt="" />
          </div>
          <div className="doimoi__trai-text">
            <h2>Một đôi Đời-mới</h2>
            <h5>đời mới êm đềm</h5>
          </div>
        </div>
        <div className="doimoi__phai ">
          <div className="doimoi__phai-tren">
            <div className="doimoi__phai-image">
              <img src={giayden} alt="" />
            </div>
            <div className="d-flex doimoi__phai-text">
              <div class="mr-auto p-2">da Đời-mới</div>
              <div class="p-2">1 470 000 VNĐ</div>
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
      </div>{' '}
    </DivdoimoiTablet>
  )
}

export default doimoitestTablet
