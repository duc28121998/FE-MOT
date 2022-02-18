import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import { Carousel } from 'antd'
import './feedback.style.scss'
import Giayvang from '../../assets/images/Product-detail/giayvang.png'
import Haimai from '../../assets/images/Product-detail/haimai.png'
import Xeden from '../../assets/images/Product-detail/xeden.png'

const Feedback = () => {
  const [dotPosition] = React.useState('left')

  return (
    <Carousel dotPosition={dotPosition} className="carousel-feedback">
      <div>
        <Row className="feedback">
          <Col
            className="feedback__anh1"
            xl={{ span: 10, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Haimai} alt="" />
          </Col>
          <Col
            className="feedback__anh2"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Xeden} alt="" />
          </Col>
          <Col
            className="feedback__anh3"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Xeden} alt="" />
          </Col>
        </Row>
      </div>
      <div>
        <Row className="feedback">
          <Col
            className="feedback__anh1"
            xl={{ span: 10, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giayvang} alt="" />
          </Col>
          <Col
            className="feedback__anh2"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giayvang} alt="" />
          </Col>
          <Col
            className="feedback__anh3"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giayvang} alt="" />
          </Col>
        </Row>
      </div>
      <div>
        <Row className="feedback">
          <Col
            className="feedback__anh1"
            xl={{ span: 10, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Haimai} alt="" />
          </Col>
          <Col
            className="feedback__anh2"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Xeden} alt="" />
          </Col>
          <Col
            className="feedback__anh3"
            xl={{ span: 5, offset: 2 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Xeden} alt="" />
          </Col>
        </Row>
      </div>
      {/* <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
    </Carousel>
  )
}

export default Feedback
