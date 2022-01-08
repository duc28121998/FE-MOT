import React from 'react'
import './doimoi.scss'
import { Row, Col } from 'antd'

import Giaydo from '../../assets/images/shop/giaydo.png'
import Giay from '../../assets/images/shop/giay.png'
import Giayden from '../../assets/images/shop/Group 2 Copy.png'
import Vo from '../content_vo/contentVo'
import { DivSelectColor } from './doimoi.style'

const Contentdoimoi = () => {
  const mockupData = [
    {
      id: 1,
      name: 'Giay den',
      img: 'Giay den',
      color: '#000',
    },
    {
      id: 2,
      name: 'Giay do',
      img: 'Giay do',
      color: 'red',
    },
    {
      id: 3,
      name: 'Giay vang',
      img: 'Giay vang',
      color: 'yellow',
    },
  ]

  return (
    <div className="giaydoimoi">
      <Row>
        <Col
          className="giaydoimoi__background"
          xl={{ span: 14 }}
          xs={{ span: 24 }}
          sm={{ span: 14 }}
        >
          <img src={Giay} alt="giaydoimoi" />
          <div className="giaydoimoi__title">
            Một đôi <br /> Đời-mới
          </div>
          <div className="giaydoimoi__p">đời mới êm đẹp</div>
        </Col>
        <Col
          className="giaydoimoi__sanpham"
          xl={{ span: 10 }}
          xs={{ span: 24 }}
          sm={{ span: 10 }}
        >
          <div>
            {/* <img src={Giayden} alt="d" /> */}
            <h3>Giay mau den</h3>
            <Row className="giaydoimoi__den">
              <Col span={9}>da Đời-mới</Col>
              <Col span={9} offset={6}>
                1 470 000 VNĐ
              </Col>
              <DivSelectColor>
                <div className="background">
                  <div className="background-children" />
                </div>
              </DivSelectColor>
              <div className="giaydoimoi__color "></div>
            </Row>
          </div>
          {/* Giay2 */}
          <div>
            <img className="giaydoimoi__sanpham-tat" src={Giaydo} alt="d" />
            <Row className="giaydoimoi__do">
              <Col span={10}>quá đỏ</Col>
              <Col span={8} offset={6}>
                720 000 VNĐ
              </Col>
              <div className="giaydoimoi__color giaydoimoi__color-black "></div>
              <div className="giaydoimoi__color "></div>
              <div className="giaydoimoi__color giaydoimoi__color-red"></div>
              <div className="giaydoimoi__color "></div>
              <div className="giaydoimoi__color "></div>
              <div className="giaydoimoi__color giaydoimoi__color-black"></div>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contentdoimoi
