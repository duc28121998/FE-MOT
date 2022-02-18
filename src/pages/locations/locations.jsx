import React, { useState } from 'react'
import 'antd/dist/antd.css'
import './location.style.scss'
import { Tabs, Badge, Avatar } from 'antd'
import { Row, Col } from 'antd'
import LocationBanner from '../../assets/images/cauchuyen/banner_location.png'
import { DivModal } from './index.style'
//TAB ANTD
const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}

//card left :
const TabsCard = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <div className="location">
      {/* BANNER  */}
      <Row className="location__banner">
        <Col
          xl={{ span: 9, offset: 2 }}
          sm={{ span: 9, offset: 2 }}
          xs={{ span: 24, offset: 0 }}
          className="location__banner-text"
        >
          <h1>Một nơi-bán</h1>
          <h5>
            chào bạn, trong thời gian dịch covid-19, Một sẽ liên tục cập nhật
            tình trạng mở cửa của các điểm bán. để chắc rằng điểm bán bạn muốn
            đến có mở cửa và sẵn sàng tiếp đón,
            <strong> hãy gọi hotline trước khi ghé bạn nhé!</strong>
            <br />
            <h4>mời bạn ghé thăm Một!</h4>
          </h5>
        </Col>
        <Col
          xl={{ span: 13, offset: 0 }}
          sm={{ span: 13, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="location__banner-image"
        >
          <img src={LocationBanner} alt="" />
        </Col>
      </Row>
      {/* TABS  */}
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Việt Nam" key="1">
          <div className="location__saigon">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={5}>
                  <h4>Sai Gon</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible(true)}
                >
                  Biker Shield
                </h2>
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible2(true)}
                >
                  TimTay{' '}
                </h2>
                <h2>Vesta Lifestyle & Gifts</h2>
                <h2>The Craft House Thương Xá Tax</h2>
                <h2>Ki-ốt Bà Na</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={2}>
                  <h4>Lam dong</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible(true)}
                >
                  La Viet Coffee
                </h2>
                <h2>Tiem ca phe Hoa hong</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={1}>
                  <h4>Nha Trang</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible2(true)}
                >
                  Lam.Lam
                </h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={1}>
                  <h4>Phú Quốc</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>Loca</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={2}>
                  <h4>Hà Nội</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>Đây Đó</h2>
                <h2>Xin-chào</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={2}>
                  <h4>Tokyo</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>
                  Isetan Tachikawa <br /> <br /> Isetan Urawa
                </h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={1}>
                  <h4>Thailand</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>Siam Discovery</h2>
              </Col>
            </Row>
          </div>
          <DivModal
            width={860}
            visible={visible}
            footer={false}
            centered
            closeIcon={
              <p className="m-0 " style={{ color: '#000' }}>
                x
              </p>
            }
            onCancel={() => setVisible(false)}
          >
            <p className="header"> Biker Shield</p>
            <div className="content mt-4">
              <strong>33A Thảo Điền, phường Thảo Điền, quận 2, Sài Gòn</strong>
              <p className="m-0">Mở cửa hàng ngày từ 09:00 sáng — 09:00 tối</p>
              <p>Hotline 0396249650</p>
              <strong>
                25F, lầu 3, Crescent Mall, 101 Tôn Dật Tiên, quận 7, Sài Gòn
              </strong>
              <p className="m-0">Mở cửa hàng ngày từ 10:00 sáng — 10:00 tối</p>
              <p className="m-0">Hotline 0769744220</p>
            </div>
          </DivModal>
          <DivModal
            width={860}
            visible={visible2}
            footer={false}
            centered
            closeIcon={
              <p className="m-0 " style={{ color: '#000' }}>
                x
              </p>
            }
            onCancel={() => setVisible2(false)}
          >
            <p className="header">Lam.Lam</p>
            <div className="content mt-4">
              <strong>33A Thảo Điền, phường Thảo Điền, quận 2, Sài Gòn</strong>
              <p className="m-0">Mở cửa hàng ngày từ 09:00 sáng — 09:00 tối</p>
              <p>Hotline 0396249650</p>
              <strong>
                25F, lầu 3, Crescent Mall, 101 Tôn Dật Tiên, quận 7, Sài Gòn
              </strong>
              <p className="m-0">Mở cửa hàng ngày từ 10:00 sáng — 10:00 tối</p>
              <p className="m-0">Hotline 0769744220</p>
            </div>
          </DivModal>
        </TabPane>
        <TabPane tab="Nhật Bản" key="2">
          <div className="location__saigon">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={5}>
                  <h4>Toki</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible(true)}
                >
                  Miyama Res
                </h2>
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible2(true)}
                >
                  Nishiazabu
                </h2>
                <h2>Vesta Lifestyle & Gifts</h2>
                <h2>Minato-ku</h2>
                <h2>Brooklyn Parlor</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={5}>
                  <h4>Osaka</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible(true)}
                >
                  Osaka Coffee
                </h2>
                <h2>Alaska CF</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={5}>
                  <h4>Kobe</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2
                  style={{ cursor: 'pointer' }}
                  onClick={() => setVisible2(true)}
                >
                  Lam.Lam
                </h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <Badge count={5}>
                  <h4>Yokohama</h4>
                </Badge>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>Loca</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h4>Hỉroshima</h4>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>Hiro Chao</h2>
                <h2>Siconataa</h2>
              </Col>
            </Row>
          </div>
          <div className="location__lamdong">
            <Row>
              <Col
                xl={{ span: 4, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h4>Tokyo</h4>
              </Col>
              <Col
                xl={{ span: 20, offset: 0 }}
                sm={{ span: 20, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h2>
                  Isetan Tachikawa <br /> <br /> Isetan Urawa
                </h2>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Thái Lan" disabled key="3">
          <h4>Chanathip</h4>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default TabsCard
