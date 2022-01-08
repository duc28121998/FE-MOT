import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import { Carousel, Radio } from 'antd'
import Banner from '../../components/banner/banner'
import Motall from '../../components/content_trietly/contentTrietly'
import CardMenu from '../../components/card-menu/card-menu'
import Box from '../../components/box/box'
import CarouselGiay from '../../components/carousel-giay/carouselGiay'
import './product.style.scss'
import Giaydo from '../../assets/images/Product-detail/giaydo.png'
import Giayvang from '../../assets/images/Product-detail/giayvang.png'
import Degiay from '../../assets/images/Product-detail/degiay.png'
// import Haichan from '../../assets/images/Product-detail/haichan.png'
// import img_giayxanh from '../../assets/images/instagram/Mot-ft-Vagabond.png'

const PositionCarouselDemo = () => {
  const [dotPosition, setDotPosition] = React.useState('left')

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value)
  }
  const contentStyle = {
    height: '800px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'blue',
  }

  return (
    <div className="product">
      {/* <Banner /> */}

      <Carousel dotPosition={dotPosition}>
        <div>
          <Row className="product__carousel1">
            <Col
              className="product__carousel1-image"
              xl={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <img src={Giaydo} alt="" />
            </Col>
            <Col
              className="product__carousel1-phai"
              xl={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <div className="product__carousel1-phai-title">
                <div className="khung">
                  <h2>vải Đời-mới</h2>
                  <h5>720 000 VNĐ</h5>
                  <h4>
                    giày vải Đời-mới <strong>có dây</strong>
                    được làm bằng vải bố 100% cô-tông đế cao su đúc nguyên khối,
                    nâng đỡ tuyệt đối cho đôi bàn chân luôn êm trong mọi hoạt
                    động hàng ngày
                  </h4>
                  <h5>đo chân làm sao ?</h5>
                </div>
              </div>
              <div className="product__carousel1-phai-add">
                <div className="option">
                  <Row>
                    <Col
                      xl={{ span: 4, offset: 0 }}
                      sm={{ span: 4, offset: 0 }}
                      xs={{ span: 4, offset: 0 }}
                    >
                      <div className="quado"></div>
                    </Col>
                    <Col
                      className="option__trai "
                      xl={{ span: 10, offset: 0 }}
                      sm={{ span: 10, offset: 0 }}
                      xs={{ span: 10, offset: 0 }}
                    >
                      <p>màu</p>
                      <h4>quá đỏ </h4>
                    </Col>
                    <Col
                      xl={{ span: 10, offset: 0 }}
                      sm={{ span: 10, offset: 0 }}
                      xs={{ span: 10, offset: 0 }}
                      className="option__size"
                    >
                      <p>size giày</p>
                      <h4>chọn size </h4>
                    </Col>
                  </Row>
                </div>
                <div className="giohang">
                  <Row>
                    <Col>
                      <h5>thêm vào giỏ hàng</h5>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row className="product__carousel1">
            <Col
              className="product__carousel1-image"
              xl={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <img src={Degiay} alt="" />
            </Col>
            <Col
              className="product__carousel1-phai"
              xl={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <div className="product__carousel1-phai-title">
                <div className="khung">
                  <h2>vải Đời-mới</h2>
                  <h5>720 000 VNĐ</h5>
                  <h4>
                    giày vải Đời-mới <strong>có dây</strong>
                    được làm bằng vải bố 100% cô-tông đế cao su đúc nguyên khối,
                    nâng đỡ tuyệt đối cho đôi bàn chân luôn êm trong mọi hoạt
                    động hàng ngày
                  </h4>
                  <h5>đo chân làm sao ?</h5>
                </div>
              </div>
              <div className="product__carousel1-phai-add">
                <div className="option">
                  <Row>
                    <Col
                      xl={{ span: 4, offset: 0 }}
                      sm={{ span: 4, offset: 0 }}
                      xs={{ span: 4, offset: 0 }}
                    >
                      <div className="quado"></div>
                    </Col>
                    <Col
                      className="option__trai "
                      xl={{ span: 10, offset: 0 }}
                      sm={{ span: 10, offset: 0 }}
                      xs={{ span: 10, offset: 0 }}
                    >
                      <p>màu</p>
                      <h4>quá đỏ </h4>
                    </Col>
                    <Col
                      xl={{ span: 10, offset: 0 }}
                      sm={{ span: 10, offset: 0 }}
                      xs={{ span: 10, offset: 0 }}
                      className="option__size"
                    >
                      <p>size giày</p>
                      <h4>nam - 40 </h4>
                    </Col>
                  </Row>
                </div>
                <div className="giohang">
                  <Row>
                    <Col>
                      <h5>thêm vào giỏ hàng</h5>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
      </Carousel>
      <div className="product__mauvang">
        <Row>
          <Col
            className="product__mauvang-trai"
            xl={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giayvang} alt="" />
          </Col>
          <Col
            className="product__mauvang-phai"
            xl={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Giayvang} alt="" />
          </Col>
        </Row>
      </div>
      <Motall />
      <CardMenu />
      <Box />
      <CarouselGiay />
    </div>
  )
}

export default PositionCarouselDemo
