import React from 'react'
import './card-menu.style.scss'
import { Row, Col } from 'antd'
import Icon_Chan from '../../assets/images/Product-detail/icon_chan.png'
import Icon_Dan from '../../assets/images/Product-detail/icon_baohanh.png'
import Icon_Mattroi from '../../assets/images/Product-detail/icon_mattroi.png'
const CardMenu = () => {
  return (
    <div className="card-menu">
      <Row>
        <Col
          className="card-menu__mot"
          xl={{ span: 6, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="card-menu__icon">
            <img src={Icon_Chan} alt="" />
          </div>
          <div className="card-menu__rectangle"></div>
          <h4>phom dáng dễ mang </h4>
          <h5>
            rộng bề ngang; đơn giản - dễ phối đồ - ai mang cũng được - đi đâu
            cũng đẹp !
          </h5>
        </Col>
        <Col
          className="card-menu__hai"
          xl={{ span: 7, offset: 2 }}
          sm={{ span: 7, offset: 2 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="card-menu__icon">
            <img src={Icon_Dan} alt="" />
          </div>
          <div className="card-menu__rectangle"></div>
          <h4>chất liệu tốt </h4>
          <h5>
            — bố cotton 100% thoáng mềm <br /> — đế đúc cao su nguyên khối nâng
            đỡ tuyệt đối <br />— lót giày làm bằng mút-xốp polyurethane tế-bào
            mở - êm lâu, thoáng khí
          </h5>
        </Col>
        <Col
          className="card-menu__ba"
          xl={{ span: 7, offset: 2 }}
          sm={{ span: 7, offset: 2 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="card-menu__icon">
            <img src={Icon_Mattroi} alt="" />
          </div>
          <div className="card-menu__rectangle"></div>
          <h4>bảo quản đơn giản </h4>
          <h5>
            cất giày ở nơi râm mát khô thoáng - tránh ánh nắng mặt trời hoặc ánh
            sáng mạnh <br />
          </h5>
          <strong>cách làm sạch giày vải --></strong>
        </Col>
      </Row>
    </div>
  )
}

export default CardMenu
