import React from 'react'
import './contentTrietly.scss'
import Contentgiaytrang from '../../assets/images/Desktop/contentgiaytrang.png'
import { Row, Col } from 'antd'
const contentTrietly = () => {
  return (
    <div className="contentTrietly">
      <Row>
        <Col
          className="contentTrietly__background"
          xl={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row>
            <Col
              className="contentTrietly__title"
              xl={{ span: 7, offset: 0 }}
              sm={{ span: 7, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <h2>triết-lý thiết-kế</h2>
            </Col>
            <Col
              className="contentTrietly__image"
              xl={{ span: 10, offset: 0 }}
              sm={{ span: 10, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <img src={Contentgiaytrang} alt="" />
            </Col>
            <Col
              className="contentTrietly__desc"
              xl={{ span: 7, offset: 0 }}
              sm={{ span: 7, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <h5>
                Một là <strong>thương hiệu Việt Nam đầu tiên </strong>được vào
                top 5 hạng mục Thiết kế Phục sức của
                <strong>Giải thưởng Thiết kế Dezeen Awards 2019 </strong>(Anh
                Quốc)
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default contentTrietly
