import React, { useState, useEffect } from 'react'

import './doithuong.scss'
import { Row, Col } from 'antd'
// import './index.style'
import Giayvang from '../../assets/images/Desktop/giayvang.png'
import Giaytrang from '../../assets/images/Desktop/giaytrang.png'
import Giaybg from '../../assets/images/Desktop/giaybg.png'
import Giaydo from '../../assets/images/shop/giaydo.png'

import { DivMobileDoithuong } from './index.style'
import Product from '../color-giay/colorGiay'

const Mobiledoithuong = () => {
  const [active, setActive] = useState(null)
  const [active2, setActive2] = useState(null)

  useEffect(() => {
    setActive(mockupData[0].id)
    setActive2(mockupQuado[0].id)
  }, [])

  const mockupData = [
    {
      id: 1,
      name: 'da Đời-thường',
      img: Giaytrang,
      color: 'white',
      price: '1 470 000',
    },
  ]

  //data qua do :
  const mockupQuado = [
    {
      id: 1,
      name: 'vải Đời-thường',
      img: Giaydo,
      color: 'red',
      price: '720 000',
    },
    {
      id: 2,
      name: 'vải Đời-thường',
      img: Giayvang,
      color: 'yellow',
      price: '730 000',
    },
    {
      id: 3,
      name: 'quá xám',
      img: Giaytrang,
      color: 'grey',
      price: '820 000',
    },
    {
      id: 4,
      name: 'quá xanh',
      img: Giaydo,
      color: 'blue',
      price: '1 920 000',
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
    <DivMobileDoithuong>
      <div className="mobile-giaydoithuong ">
        <Row>
          <Col
            className="mobile-giaydoithuong__background"
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giaybg} alt="mobile-giaydoithuong" />
            <div className="mobile-giaydoithuong__title">
              Một đôi <br /> Đời-thường
            </div>
            <div className="mobile-giaydoithuong__p">
              không dây không lo nghĩ
            </div>
          </Col>
          <Col
            className="mobile-giaydoithuong__sanpham"
            xs={{ span: 24, offset: 0 }}
          >
            <Product id={active} listData={mockupData} onChange={onChange} />
            <Product id={active2} listData={mockupQuado} onChange={onChange2} />
          </Col>
        </Row>
      </div>
    </DivMobileDoithuong>
  )
}

export default Mobiledoithuong
