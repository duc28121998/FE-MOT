import React from 'react'
// import './aomua.scss'
import { Row, Col } from 'antd'
import { DivMobileAoMua } from './index.style'
import Aomua from '../../assets/images/shop/aokhoac.png'
import Aomuadon from '../../assets/images/shop/aokhoacdon.png'

const Aomuamobile = () => {
  return (
    <DivMobileAoMua>
      <div className="aomua ">
        <Row>
          <Col className="aomua__background" xs={{ span: 24 }}>
            <img src={Aomua} alt="aomua" />
            <div className="aomua__title">áo mưa Nhanh</div>
            <div className="aomua__p">bất chấp thời tiết</div>
          </Col>
          <Col className="aomua__sanpham" xs={{ span: 24 }}>
            <img className="aomua__sanpham-tat " src={Aomuadon} alt="d" />
            <Row className="aomua__vang">
              <Col span={10}>áo mưa</Col>
              <Col span={8} offset={6}>
                290 000 VNĐ
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </DivMobileAoMua>
  )
}

export default Aomuamobile
