import React from 'react'
import './bannerCauchuyen.scss'
import { Carousel } from 'antd'
import BannerCauchuyen from '../../assets/images/cauchuyen/banner-cauchuyen.png'
// rafce
const bannerCauchuyen = () => {
  return (
    <div className="banner-cauchuyen">
      <Carousel>
        {/* 1 */}

        <div className="banner-cauchuyen__size">
          <div className="banner-cauchuyen__content">
            Một được sinh ra từ nhu cầu dành cho những sản phẩm{' '}
            <strong>thiết-kế lấy người-dùng làm trung-tâm</strong>, có chất
            lượng <strong>gia công tỉ mỉ </strong>và hướng đến{' '}
            <strong>tiêu-dùng bền vững.</strong>
          </div>
          <div className="banner-cauchuyen__logo">Một cho tất cả.</div>
        </div>

        {/* 2 */}

        <div className="banner-cauchuyen__size">
          <div className="banner-cauchuyen__title">tôi & ta</div>
          <div className="banner-cauchuyen__content">
            phiên bản đặc-biệt cho mùa lễ hội 2022
          </div>
          <div className="banner-cauchuyen__buynow">mua liền !</div>
        </div>
        {/* 3 */}
        <div className="banner-cauchuyen__size">
          <div className="banner-cauchuyen__title">tôi & ta</div>
          <div className="banner-cauchuyen__content">
            phiên bản đặc-biệt cho mùa lễ hội 2023
          </div>
          <div className="banner-cauchuyen__buynow">mua liền !</div>
        </div>
      </Carousel>
    </div>
  )
}

export default bannerCauchuyen
