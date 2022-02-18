import React, { useState, useEffect } from 'react'

import './dep.scss'
import { Row, Col } from 'antd'
import dep from '../../assets/images/shop/depden.png'
import Depdon from '../../assets/images/shop/depdon.png'
import Product from '../color-giay/colorGiay'
const Dep = () => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    setActive(mockupData[0].id)
  }, [])
  const mockupData = [
    {
      id: 1,
      name: 'dép Ngang',
      img: Depdon,
      color: '#000',
      price: '390 000',
    },
    {
      id: 2,
      name: 'Giay do',
      img: 'dép đỏ',
      color: 'red',
      price: '2 900 000',
    },
    {
      id: 3,
      name: 'Giay vang',
      img: 'Dép vàng',
      color: 'yellow',
      price: '1 000 000',
    },
  ]

  function onChange(a) {
    setActive(a)
  }

  if (!active) return <div />
  return (
    <div className="dep">
      <Row>
        <Col
          className="dep__background"
          xl={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
        >
          <img src={dep} alt="depp" />
          <div className="dep__title">dép Ngang</div>
          <div className="dep__p">ngang mà sang</div>
        </Col>
        <Col
          className="dep__sanpham"
          xl={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
        >
          <Product id={active} listData={mockupData} onChange={onChange} />
        </Col>
      </Row>
    </div>
  )
}

export default Dep
