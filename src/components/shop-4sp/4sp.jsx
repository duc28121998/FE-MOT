import React from 'react'
import './4sp.style.scss'
import { Row, Col } from 'antd'
import IMG1 from '../../assets/images/ractangle-10-17.png'
import IMG2 from '../../assets/images/ractangle-10-18.png'
import IMG3 from '../../assets/images/ractangle-10-19.png'
import IMG4 from '../../assets/images/ractangle-10-20.png'
const bonsp = () => {
  return (
    <div className="bonsp">
      <div className="bonsp__title">
        <h4>xem het moi thu</h4>
      </div>
      <Row className="bonsp__khung">
        <Col
          className="bonsp__sp1"
          xl={{ span: 10, offset: 0 }}
          sm={{ span: 9, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={IMG1} alt="" />
          <h5>giày</h5>
          <h3>Một dôi nguyên giày</h3>
        </Col>
        <Col
          className="bonsp__sp2"
          xl={{ span: 10, offset: 4 }}
          sm={{ span: 9, offset: 3 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={IMG3} alt="" />
          <h5>dép</h5>
          <h3>ngang mà sang</h3>
        </Col>
        <Col
          className="bonsp__sp3"
          xl={{ span: 10, offset: 0 }}
          sm={{ span: 9, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={IMG2} alt="" />
          <h5>phụ kiện</h5>
          <h3>thích thì mua</h3>
        </Col>
        <Col
          className="bonsp__sp4"
          xl={{ span: 10, offset: 4 }}
          sm={{ span: 9, offset: 3 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={IMG4} alt="" />
          <h5>áo mưa</h5>
          <h3>bất chấp thời tiết</h3>
        </Col>
      </Row>
    </div>
  )
}

export default bonsp
