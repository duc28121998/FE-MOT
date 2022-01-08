import React from 'react'
import './box.style.scss'
import { Row, Col } from 'antd'
import Boxx from '../../assets/images/Product-detail/feed.png'
import Lotgiay from '../../assets/images/shop/devo.png'
import Voden from '../../assets/images/shop/voden.png'
const Box = () => {
  return (
    <div className="box">
      <Row className="box__all">
        <Col
          className="box__text"
          xl={{ span: 10, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="box__rectangle"></div>
          <h4>nhận nhiều hơn chỉ Một !</h4>
          <h5>
            - hộp giày từ các-tông tái chế <br /> - Một may giỏ từ vải thừa
            trong nhà máy, tặng miễn phí để bạn thích gì đựng đó ( nên màu túi
            và chất vải hoàn toàn ngẫu nhiên) <br />- rất nhiều hình dán
          </h5>

          <div className="box__rectangle dubo"></div>

          <h4> mua cho đủ bộ</h4>
          <Row className="box__sanpham">
            <Col
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 11, offset: 0 }}
            >
              <div className="box__sanpham">
                <img src={Lotgiay} alt="" />
                <div className="box__sanpham-text">
                  <h3> một cặp lót giày</h3>
                  <p> 120 000 VNĐ </p>
                </div>
                <div className="box__sanpham-size">
                  <p>size M</p>
                </div>
                <div className="box__sanpham-btn">
                  <div className="box-mot">xem thêm</div>
                  <div className="box-hai">mua luôn !</div>
                </div>
              </div>
            </Col>
            <Col
              className="box__sanpham box__sanpham-duoi"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 13, offset: 0 }}
            >
              <div className="box__sanpham">
                <img src={Voden} alt="" />
                <div className="box__sanpham-text">
                  <h3> một cặp lót giày</h3>
                  <p> 120 000 VNĐ </p>
                </div>
                <div className="box__sanpham-size">
                  <p>one size(39M-45M)</p>
                </div>
                <div className="box__sanpham-btn">
                  <div className="box-mot">xem thêm</div>
                  <div className="box-hai">mua luôn !</div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        {/* //image  */}
        <Col
          className="box__image"
          xl={{ span: 14, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <img src={Boxx} alt="" />
        </Col>
      </Row>
    </div>
  )
}

export default Box
