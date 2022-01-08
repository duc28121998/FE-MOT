import React from 'react'
import './dep.scss'
import { Row, Col } from 'antd'
import Dep from '../../assets/images/shop/depden.png'
import Depdon from '../../assets/images/shop/depdon.png'
import Vo from '../../components/content_vo/contentVo'

function dep() {
  return (
    <div className="dep">
      <Row>
        <Col
          className="dep__background"
          xl={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
        >
          <img src={Dep} alt="depp" />
          <div className="dep__title">dép Ngang</div>
          <div className="dep__p">ngang mà sang</div>
        </Col>
        <Col
          className="dep__sanpham"
          xl={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
        >
          <img src={Depdon} alt="d" />
          <Row className="dep__gia">
            <Col span={8}>dép Ngang</Col>
            <Col span={8} offset={8}>
              390 000 VNĐ
            </Col>
            <div className="giaydoithuong__color"></div>
            <div className="giaydoithuong__color giaydoithuong__color-red"></div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default dep
