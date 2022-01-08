import React from 'react'
import './carouselGiay.style.scss'
import { Row, Col } from 'antd'
import GiayBlack from '../../assets/images/Product-detail/giayBlack.png'
import GiayWhite from '../../assets/images/Product-detail/giayWhite.png'
import GiayYellow from '../../assets/images/Product-detail/giayYellow.png'

const CarouselGiay = () => {
  return (
    <div className="carousel-giay">
      <div className="carousel-giay__title">
        <h4>biết đâu bạn thích ?</h4>
      </div>
      <Row>
        <Col
          className="carousel-giay__mot"
          xl={{ span: 6, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          xs={{ span: 12, offset: 0 }}
        >
          <img src={GiayBlack} alt="" />
          <div className="carousel-giay__text">
            <h5>da Đời-mới </h5>
            <p> 1 470 000 VNĐ</p>
          </div>
        </Col>
        <Col
          className="carousel-giay__hai"
          xl={{ span: 6, offset: 3 }}
          sm={{ span: 6, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
        >
          <img src={GiayWhite} alt="" />
          <div className="carousel-giay__text">
            <h5>da Đời-thường </h5>
            <p> 1 470 000 VNĐ</p>
          </div>
        </Col>
        <Col
          className="carousel-giay__ba"
          xl={{ span: 6, offset: 3 }}
          sm={{ span: 6, offset: 3 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={GiayYellow} alt="" />
          <div className="carousel-giay__text">
            <h5>vải Đời-thường </h5>
            <p> 720 000 VNĐ</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default CarouselGiay
