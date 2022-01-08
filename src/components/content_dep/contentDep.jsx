import React from 'react'
import './contentDep.scss'

import Dep from '../../assets/images/shop/depden.png'
import Depdon from '../../assets/images/shop/depdon.png'
import Bgxam from '../../assets/images/shop/bgxam.png'
const ContentDep = () => {
  return (
    <div className="container contentDep">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-12">
          <div className="dep">
            <img className="dep__img1" src={Bgxam} alt="aa" />
            <img className="dep__img2" src={Dep} alt="aaaa" />
            <div className="dep__text">dép Ngang</div>
            <div className="dep__text1">ngang mà sang</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 dep-phai">
          <div className="dep-phai__tren">
            <img src={Depdon} alt="" />
            <div className="dep-phai__tren-text">
              <div className="row">
                <div className="col-md-4 col-4">dép Ngang</div>
                <div className="col-md-4 col-4 ml-auto">390 000 VNĐ</div>
              </div>
              <div className="row">
                <div className=" dep-phai__tren-color dep-phai__tren-color-den"></div>
                <div className=" dep-phai__tren-color dep-phai__tren-color-trang"></div>
              </div>
            </div>
          </div>

          {/* duoi  */}
          {/* <div className="phai__duoi">
            <img src={giaydo} alt="" />
            <div className="phai__tren-text">
              <div class="row">
                <div class="col-md-4 col-4">quá đỏ</div>
                <div class="col-md-4 col-4 ml-auto">720 000 VNĐ</div>
              </div>
              <div class="row">
                <div className=" phai__tren-color phai__tren-color-do"></div>
                <div className=" phai__tren-color phai__tren-color-vang"></div>
                <div className=" phai__tren-color phai__tren-color-xam"></div>
                <div className=" phai__tren-color phai__tren-color-trang"></div>
                <div className=" phai__tren-color phai__tren-color-tim"></div>
                <div className=" phai__tren-color phai__tren-color-dentrang"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContentDep
