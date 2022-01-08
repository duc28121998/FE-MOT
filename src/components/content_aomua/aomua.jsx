import React from 'react'
import './aomua.scss'
import { Row, Col } from 'antd'

import Aomua from '../../assets/images/shop/aokhoac.png'
import Aomuadon from '../../assets/images/shop/aokhoacdon.png'

const ContentAomua = () => {
  return (
    <div className="aomua ">
      <Row>
        <Col
          className="aomua__sanpham"
          xl={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
        >
          <img className="aomua__sanpham-tat " src={Aomuadon} alt="d" />
          <Row className="aomua__vang">
            <Col span={10}>áo mưa</Col>
            <Col span={8} offset={6}>
              290 000 VNĐ
            </Col>
          </Row>
        </Col>
        <Col
          className="aomua__background"
          xl={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
        >
          <img src={Aomua} alt="aomua" />
          <div className="aomua__title">áo mưa Nhanh</div>
          <div className="aomua__p">bất chấp thời tiết</div>
        </Col>
      </Row>
    </div>

    // <div className="container aomua">
    //   <div className="row">
    //     <div className="col-md-6 col-sm-6 col-12 aomua-trai">
    //       <div className="aomua-trai__tren">
    //         <img src={aomuadon} alt="" />
    //         <div className="aomua-trai__tren-text">
    //           <div className="row">
    //             <div className="col-md-4 col-4">áo mưa</div>
    //             <div className="col-md-4 col-4 ml-auto">290 000 VNĐ</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-6 col-sm-6 col-12 aomua-phai">
    //       <div className="aomua-img">
    //         <img className="aomua-img__img1" src={bgnau} alt="aa" />
    //         <img className="aomua-img__img2" src={aomua} alt="aaaa" />
    //         <div className="aomua-img__text">áo mưa Nhanh</div>
    //         <div className="aomua-img__text1">bất chấp thời tiết</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ContentAomua
