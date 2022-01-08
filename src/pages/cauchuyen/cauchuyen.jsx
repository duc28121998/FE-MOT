import React from 'react'
import Banner from '../../components/banner/banner'
import Shop from '../../components/shop/shop'
import './cauchuyen.style.scss'
import { Row, Col } from 'antd'
import BannerCauchuyen from '../../components/banner-cauchuyen/bannerCauchuyen'
import Content_Toita from '../../components/content_toita/content_toita'
import Bonsp from '../../components/shop-4sp/4sp'
const Cauchuyen = () => (
  <div className="cauchuyen">
    <BannerCauchuyen />
    <Content_Toita />

    <Content_Toita />
    <Content_Toita />
    <Bonsp />
  </div>
)

export default Cauchuyen
