import React from 'react'
import './footer.scss'
import { Row, Col } from 'antd'
import { Socialins, Socialface, Muiten } from '../../assets/svgs/index'

import bct from '../../assets/images/shop/Bitmap.png'
const Footer = () => {
  return (
    <div className="main-footer">
      <Row className="footer w-100">
        <Col
          className="footer__thietke"
          xl={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="footer__thietke-h4">thiết kế tại Việt Nam</div>
          <Row className="footer__thietke-shop">
            <Col
              className="footer__thietke-mot"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
            >
              <h3>giày / dép</h3>
              <h3>áo mưa</h3>
              <h3>phụ kiện</h3>
            </Col>
            <Col
              className="footer__thietke-mot footer__thietke-hai "
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
            >
              <a href="/cauchuyen">
                <h3>câu-chuyện</h3>
              </a>
              <a href="/noiban">
                <h3>nơi-bán</h3>
              </a>
              <a href="/thacmac">
                <h3>thắc-mắc</h3>
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          className="footer__lienhe"
          xl={{ span: 11, offset: 1 }}
          sm={{ span: 11, offset: 1 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row>
            <Col
              className="footer__lienhe-mot"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <div className="footer__lienhe-title">giữ liên lạc nhé ? </div>
              <div className="footer__lienhe-desc">
                điền địa chỉ e-mail để nhận mọi tin tức và quà tặng từ Một
              </div>
              <div className="footer__lienhe-email">
                <div className=" input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control footer__email-input"
                    placeholder="email của bạn"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <Muiten />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="footer__lienhe-hai"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <Row>
                <Col
                  className="footer__lienhe-social"
                  xl={{ span: 14, offset: 0 }}
                  sm={{ span: 16, offset: 0 }}
                  xs={{ span: 17, offset: 0 }}
                >
                  <Socialins />
                  <Socialface />
                  <img src={bct} className="footer__lienhe-bct" alt="aaa" />
                </Col>
                <Col
                  className="footer__lienhe-version"
                  xl={{ span: 4, offset: 6 }}
                  sm={{ span: 5, offset: 3 }}
                  xs={{ span: 6, offset: 1 }}
                >
                  <p>@2021 Mot</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
