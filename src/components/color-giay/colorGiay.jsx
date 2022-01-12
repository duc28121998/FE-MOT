import React from 'react'
import { Row, Col } from 'antd'
import SelectColor from '../selectColor'
const Product = ({ id, listData = [], onChange }) => {
  const item = listData.find((item) => item.id === id)
  return (
    <div>
      <img src={item.img} alt="" />
      <Row className="giaydoimoi__den">
        <Col span={9}>{item.name}</Col>
        <Col span={9} offset={6}>
          {item.price} VNĐ
        </Col>
        {listData.map((product) => (
          <SelectColor
            className="mr-1"
            onClick={() => onChange(product.id)}
            color={product.color}
            active={id === product.id}
          />
        ))}
      </Row>
    </div>
  )
}

export default Product
