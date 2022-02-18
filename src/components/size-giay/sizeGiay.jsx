import React from 'react'
import { Row, Col } from 'antd'

import SelectSize from '../selectSize/colorGiay'
const SizeGiay = ({ id, listData = [], onChange }) => {
  const item = listData.find((item) => item.id === id)
  return (
    <div>
      <Row className="giaydoimoi__den">
        <Col span={9}>{item.size}</Col>

        {listData.map((SizeGiay) => (
          <SelectSize
            className="mr-1"
            onClick={() => onChange(SizeGiay.id)}
            size={SizeGiay.size}
            active={id === SizeGiay.id}
          />
        ))}
      </Row>
    </div>
  )
}

export default SizeGiay
