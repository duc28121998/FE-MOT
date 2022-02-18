import React from 'react'
import './cauchuyen.style.scss'
import BannerCauchuyen from '../../components/banner-cauchuyen/bannerCauchuyen'
import ContentTrietly from '../../components/content_trietly/contentTrietly'
import ContentToita from '../../components/content_toita/content_toita'
import Bonsp from '../../components/shop-4sp/4sp'
const Cauchuyen = () => (
  <div className="cauchuyen">
    <BannerCauchuyen />
    <ContentTrietly />
    <ContentToita />
    <ContentTrietly />
    <Bonsp />
  </div>
)

export default Cauchuyen
