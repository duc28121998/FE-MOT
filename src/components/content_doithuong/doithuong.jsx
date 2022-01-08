import React from 'react'
import './doithuong.scss'
import { Row, Col } from 'antd'

import Giayvang from '../../assets/images/Desktop/giayvang.png'
import Giaytrang from '../../assets/images/Desktop/giaytrang.png'
import Giaybg from '../../assets/images/Desktop/giaybg.png'

const Contentdoithuong = () => {
  return (
    <div className="giaydoithuong ">
      <Row>
        <Col
          className="giaydoithuong__sanpham"
          xl={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
        >
          <img src={Giaytrang} alt="d" />
          <Row className="giaydoithuong__trang">
            <Col span={9}>da Đời-thường</Col>
            <Col span={9} offset={6}>
              1 470 000 VNĐ
            </Col>
            <div className="giaydoithuong__color"></div>
          </Row>
          <img className="giaydoithuong__sanpham-tat " src={Giayvang} alt="d" />
          <Row className="giaydoithuong__vang">
            <Col span={10}>vải Đời-thường</Col>
            <Col span={8} offset={6}>
              720 000 VNĐ
            </Col>
            <div className="giaydoithuong__color"></div>
            <div className="giaydoithuong__color giaydoithuong__color-red"></div>
          </Row>
        </Col>
        <Col
          className="giaydoithuong__background"
          xl={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
        >
          <img src={Giaybg} alt="giaydoithuong" />
          <div className="giaydoithuong__title">
            Một đôi <br /> Đời-thường
          </div>
          <div className="giaydoithuong__p">không dây không lo nghĩ</div>
        </Col>
      </Row>
    </div>
  )
}

export default Contentdoithuong
