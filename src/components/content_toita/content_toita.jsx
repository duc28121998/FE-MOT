import React from 'react'
import './content_toita.scss'
import Toita from '../../assets/images/Desktop/toita.png'
import { Row, Col } from 'antd'

const content_Toita = () => {
  return (
    <div className="contentToita">
      <Row>
        <Col
          className="contentToita__background"
          xl={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row>
            <Col
              className="contentToita__title"
              xl={{ span: 7, offset: 0 }}
              sm={{ span: 7, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <h2>
                bản đặc biệt <br /> tôi & ta
              </h2>
            </Col>
            <Col
              className="contentToita__image"
              xl={{ span: 10, offset: 0 }}
              sm={{ span: 10, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <img src={Toita} alt="" />
            </Col>
            <Col
              className="contentToita__desc"
              xl={{ span: 7, offset: 0 }}
              sm={{ span: 7, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <h5>
                vải Đời-mới — phiên bản đặc-biệt cho mùa lễ hội 2021. Dáng hình
                quen thuộc dưới <strong>Một làn da mới</strong>: Một kết-hợp với
                hoạ sĩ Trần Ngọc Sinh
              </h5>
              <p>mua liền !</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default content_Toita
