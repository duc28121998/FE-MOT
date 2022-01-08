import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './location.style.scss'
import { Tabs, Radio, Card } from 'antd'
import { Row, Col } from 'antd'
import LocationBanner from '../../assets/images/cauchuyen/banner_location.png'

//TAB ANTD
const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}
//CARD ANTD :

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
]

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
}

//card left :
const TabsCard = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1')

  const onTab1Change = (key) => {
    setActiveTabKey1(key)
  }

  return (
    <div className="location">
      {/* BANNER  */}
      <Row className="location__banner">
        <Col
          xl={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
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
          xl={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="location__banner-image"
        >
          <img src={LocationBanner} alt="" />
        </Col>
      </Row>
      {/* TABS  */}
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Việt Nam" key="1">
          <h4>Sai Gon</h4>
        </TabPane>
        <TabPane tab="Nhật Bản" key="2">
          <h4>Tokyo</h4>
        </TabPane>
        <TabPane tab="Thái Lan" disabled key="3">
          <h4>Chanathip</h4>
        </TabPane>
      </Tabs>

      {/* CARD  */}
      {/* <>
        <Card
          style={{ width: '100%' }}
          title="Sài gòn"
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onTab1Change(key)
          }}
        >
          {contentList[activeTabKey1]}
        </Card>
      </> */}
    </div>
  )
}

export default TabsCard
