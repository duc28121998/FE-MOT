import React from 'react'
import Banner from '../../components/banner/banner'
import Shop from '../../components/shop/shop'
import './homepage.styles.scss'
import { Row, Col } from 'antd'

import ContentTrietly from '../../components/content_trietly/contentTrietly'
import Vo from '../../components/content_vo/contentVo'
import ContentToita from '../../components/content_toita/content_toita'
import Doimoi from '../../components/content_doimoi/doimoi'
import IMG4 from '../../assets/images/motchotatca.png'
import img_vespa from '../../assets/images/instagram/vespa.jpg'
import img_read from '../../assets/images/instagram/diễn đàn Tinhte.png'
import img_mot from '../../assets/images/instagram/instagram.fcdg1-1.fna.fbcdn 1.png'
import img_giayxanh from '../../assets/images/instagram/Mot-ft-Vagabond.png'
import { Instagram, Motdoigiay, Tinhte } from '../../assets/svgs/index'
import Bonsp from '../../components/shop-4sp/4sp'
const HomePage = () => (
  <div className="homepage">
    <Banner />
    <Bonsp />

    <div className="homepage__motladu">
      <div className="homepage__motladu-rectangle"></div>
      <div className="homepage__motladu-desc">
        <h3>
          Một biểu trưng cho tinh thần Việt Nam hiện đại. Một làm các sản phẩm
          bạn cần trong đời sống thường ngày. Một tự chủ trong thiết kế, đảm bảo
          chất lượng gia công tỉ mỉ - bền đẹp với thời gian mà giá cả lại phải
          chăng.
        </h3>
        <button>
          <p>cau-chuyen</p>
        </button>
        <img src={IMG4} alt="motchotatca" />
      </div>
    </div>
    <div className="homepage__media-rectangle"></div>

    <Row className="homepage__media">
      <Col
        xl={{ span: 6, offset: 0 }}
        sm={{ span: 6, offset: 0 }}
        xs={{ span: 12, offset: 0 }}
        className="homepage__media-mot"
      >
        <h4>nói gì về Một ?</h4>
      </Col>
      <Col
        xl={{ span: 6, offset: 3 }}
        sm={{ span: 6, offset: 3 }}
        xs={{ span: 12, offset: 0 }}
        className="homepage__media-icon"
      >
        <div className="mediaViet">
          <Instagram />
        </div>
        <div className="mediaIns">
          <Tinhte />
        </div>
        <div className="mediaLogo">
          <Instagram />
        </div>
      </Col>
      <Col
        xl={{ span: 14, offset: 7 }}
        sm={{ span: 14, offset: 7 }}
        xs={{ span: 24, offset: 0 }}
        className="homepage__media-desc"
      >
        Một - Niềm tự hào mới của giày Việt... Thương hiệu giày sinh sau đẻ muộn
        này nhanh chóng nhận được sự yêu thích từ giới trẻ nhờ vào thiết kế đơn
        giản, tinh tế, ôm trọn cổ chân và chất lượng không thua kém bất kỳ ông
        lớn nào.
        <br />
        <img src={img_read} alt="aaa" />
      </Col>
    </Row>
  </div>
)

export default HomePage
