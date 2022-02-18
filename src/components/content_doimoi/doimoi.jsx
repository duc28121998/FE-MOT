import React, { useState, useEffect } from 'react'
import './doimoi.scss'
import { Row, Col } from 'antd'
import Giaydo from '../../assets/images/shop/giaydo.png'
import Giay from '../../assets/images/shop/giay.png'
import Giayden from '../../assets/images/shop/Group 2 Copy.png'

import Giayvang from '../../assets/images/Desktop/giayvang.png'
import Product from '../../components/color-giay/colorGiay'
const Contentdoimoi = () => {
  const [active, setActive] = useState(null)
  const [active2, setActive2] = useState(null)

  useEffect(() => {
    setActive(mockupData[0].id)
    setActive2(mockupQuado[0].id)
  }, [])

  const mockupData = [
    {
      id: 1,
      name: 'Giay den',
      img: Giayden,
      color: '#000',
      price: '1 900 000',
    },
    {
      id: 2,
      name: 'Giay do',
      img: Giaydo,
      color: 'red',
      price: '2 900 000',
    },
    {
      id: 3,
      name: 'Giay vang',
      img: Giayvang,
      color: 'yellow',
      price: '1 000 000',
    },
  ]

  //data qua do :
  const mockupQuado = [
    {
      id: 1,
      name: 'quá đỏ',
      img: Giaydo,
      color: 'red',
      price: '720 000',
    },
    {
      id: 2,
      name: 'quá vàng',
      img: Giayvang,
      color: 'yellow',
      price: '720 000',
    },
    {
      id: 3,
      name: 'quá xám',
      img: Giayden,
      color: 'grey',
      price: '720 000',
    },
    {
      id: 4,
      name: 'quá xanh',
      img: Giayden,
      color: 'blue',
      price: '720 000',
    },
  ]

  function onChange(a) {
    setActive(a)
  }
  function onChange2(a) {
    setActive2(a)
  }

  if (!active) return <div />

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
          <Product id={active} listData={mockupData} onChange={onChange} />
          <Product id={active2} listData={mockupQuado} onChange={onChange2} />
        </Col>
      </Row>
    </div>
  )
}

export default Contentdoimoi
