import React from 'react'
import './contentVo.scss'
import { Row, Col } from 'antd'

import Vo from '../../assets/images/shop/vo.png'
import Vodon from '../../assets/images/shop/voden.png'
// import bgxanhreu from '../../assets/images/shop/bgxanhreu.png'
import Devo from '../../assets/images/shop/devo.png'
const ContentVo = () => {
  return (
    <div className="vo">
      <Row>
        <Col
          className="vo__background"
          xl={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
        >
          <img src={Vo} alt="vo" />
          <div className="vo__title">phụ kiện</div>
          <div className="vo__p">thích thì mua</div>
        </Col>
        <Col
          className="vo__sanpham"
          xl={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
        >
          <img src={Devo} alt="d" />
          <Row className="vo__gia">
            <Col span={10}>Một cặp lót giày</Col>
            <Col span={8} offset={6}>
              120 000 VNĐ
            </Col>
          </Row>
          <img className="vo__sanpham-tat" src={Vodon} alt="d" />
          <Row className="vo__de">
            <Col span={10}>vớ Tất-cả</Col>
            <Col span={8} offset={6}>
              120 000 VNĐ
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ContentVo
