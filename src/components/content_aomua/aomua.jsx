import React from 'react'
// import './aomua.scss'
import { Row, Col } from 'antd'
import { DivAoMua } from './index.style'
import Aomua from '../../assets/images/shop/aokhoac.png'
import Aomuadon from '../../assets/images/shop/aokhoacdon.png'

const ContentAomua = () => {
  return (
    <DivAoMua>
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
    </DivAoMua>
  )
}

export default ContentAomua
