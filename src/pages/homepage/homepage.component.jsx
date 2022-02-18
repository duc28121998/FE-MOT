import React from 'react'
import Banner from '../../components/banner/banner'
import './homepage.styles.scss'
import { Col, Tabs, Row, Alert } from 'antd'
// import IMG4 from '../../assets/images/motchotatca.png'
import img_read from '../../assets/images/instagram/diễn đàn Tinhte.png'
import a from '../../assets/images/Product-detail/xeden.png'
import { ImageGrey, Instagram, Tinhte } from '../../assets/svgs/index'
import Bonsp from '../../components/shop-4sp/4sp'
import { DivMediaTab } from './index.style'
import { Muiten, Cookie } from '../../assets/svgs/index'
import Vespa from '../../assets/images/instagram/vespa.jpg'
import Camgiay from '../../assets//images/instagram/instagram.fcdg1-1.fna.fbcdn 1.png'
import Ba from '../../assets/images/instagram/Mot-ft-Vagabond.png'
const { TabPane } = Tabs

// const onClose = (e) => {
//   console.log(e, 'I was closed.')
// }
function callback(key) {
  console.log(key)
}

const HomePage = () => (
  <div className="homepage">
    <Banner />
    <div className="homepage__cookie">
      <Alert
        message={
          <div className="homepage__cookie-in">
            <Cookie />
            <h5>
              vô website này là bạn đã đồng ý để chúng tôi xài bánh quy.
              <br /> chúng tôi xài bánh quy để đảm bảo mang đến cho bạn một trải
              nghiệm tuyệt vời cũng như để website chạy mượt mà nhất-có-thể.
            </h5>
          </div>
        }
        closable
      />
    </div>
    <div className="homepage__card">
      <Row>
        <Col
          className="homepage__lienhe-mot"
          xl={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="homepage__lienhe-title">giữ liên lạc nhé ? </div>
          <div className="homepage__lienhe-desc">
            điền địa chỉ e-mail để nhận mọi tin tức và quà tặng từ Một
          </div>
          <div className="homepage__lienhe-email">
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
      </Row>
    </div>
    <Bonsp />
    <div className="homepage__media-rectangle"></div>
    <div className="homepage__motladu">
      <div className="homepage__motladu-desc">
        <h3>
          Một biểu trưng cho tinh thần Việt Nam hiện đại. Một làm các sản phẩm
          bạn cần trong đời sống thường ngày. Một tự chủ trong thiết kế, đảm bảo
          chất lượng gia công tỉ mỉ - bền đẹp với thời gian mà giá cả lại phải
          chăng.
        </h3>
        <a href="\Cauchuyen">
          <button>
            <p>cau-chuyen</p>
          </button>
        </a>

        {/* <img src={IMG4} alt="motchotatca" /> */}
        <h1>Một cho tất cả.</h1>
        <div className="homepage__motladu-rectangle"></div>

        <div className="homepage__motladu-icon">
          <Instagram />
          <h4>@Motdoigiay</h4>
        </div>
        <div className="homepage__motladu-carousel">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img className="d-block w-100" src={Vespa} alt="First slide" />
                <img className="d-block" src={Camgiay} alt="Second slide" /> */}
                <img src={Vespa} className="w-50" alt="" />
                <img src={Camgiay} className="ml-4" alt="" />
                <img src={Ba} className="ml-4" alt="" />
              </div>
              <div className="carousel-item">
                <img src={Ba} className="ml-4" alt="" />
                <img src={Vespa} className="ml-4" alt="" />
                <img src={Camgiay} className="ml-4" alt="" />
              </div>
            </div>
            <a
              className="carousel-control-prev d-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next d-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="homepage__media-rectangle"></div> */}

    <DivMediaTab defaultActiveKey="1" onChange={callback}>
      <div className="aaa" tab="nói gì về Một ? " key="4"></div>
      <TabPane
        offset={7}
        tab={<Instagram />}
        key="2"
        className="homepage__media-tabs"
      >
        <Col
          xl={{ span: 17, offset: 7 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="homepage__media-desc"
        >
          DUY TÂN
        </Col>
      </TabPane>
      <TabPane tab={<Tinhte />} key="1">
        <Col
          xl={{ span: 17, offset: 7 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="homepage__media-desc list"
        >
          Một - Niềm tự hào mới của giày Việt... Thương hiệu giày sinh sau đẻ
          muộn này nhanh chóng nhận được sự yêu thích từ giới trẻ nhờ vào thiết
          kế đơn giản, tinh tế, ôm trọn cổ chân và chất lượng không thua kém bất
          kỳ ông lớn nào
          <br />
          <img src={img_read} alt="aaa" />
        </Col>
      </TabPane>
      <TabPane tab={<Instagram />} key="3">
        <Col
          xl={{ span: 17, offset: 7 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="homepage__media-desc"
        >
          LỮ KHẢI
        </Col>
      </TabPane>
    </DivMediaTab>
  </div>
)

export default HomePage
