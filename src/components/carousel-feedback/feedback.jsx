import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import { Carousel, Radio } from 'antd'
import Banner from '../../components/banner/banner'
import Motall from '../../components/content_trietly/contentTrietly'
import CardMenu from '../../components/card-menu/card-menu'
import Box from '../../components/box/box'
import './feedback.style.scss'
import Giaydo from '../../assets/images/Product-detail/giaydo.png'
import Giayvang from '../../assets/images/Product-detail/giayvang.png'
import Degiay from '../../assets/images/Product-detail/degiay.png'
import Haimai from '../../assets/images/Product-detail/haimai.png'
import Xeden from '../../assets/images/Product-detail/xeden.png'

const Feedback = () => {
  const [dotPosition, setDotPosition] = React.useState('left')

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value)
  }
  //   const contentStyle = {
  //     height: '800px',
  //     color: 'black',
  //     lineHeight: '160px',
  //     textAlign: 'center',
  //     background: 'blue',
  //   }

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
