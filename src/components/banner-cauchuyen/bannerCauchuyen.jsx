import React from 'react'
import './bannerCauchuyen.scss'
import { Carousel } from 'antd'
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
          <div className="banner-cauchuyen__content">
            Một được sinh ra từ nhu cầu dành cho những sản phẩm{' '}
            <strong>thiết-kế lấy người-dùng làm trung-tâm</strong>, có chất
            lượng <strong>gia công tỉ mỉ </strong>và hướng đến{' '}
            <strong>tiêu-dùng bền vững.</strong>
          </div>
          <div className="banner-cauchuyen__logo">BANNER 2.</div>
        </div>
        {/* 3 */}
        <div className="banner-cauchuyen__size">
          <div className="banner-cauchuyen__content">
            Một được sinh ra từ nhu cầu dành cho những sản phẩm{' '}
            <strong>thiết-kế lấy người-dùng làm trung-tâm</strong>, có chất
            lượng <strong>gia công tỉ mỉ </strong>và hướng đến{' '}
            <strong>tiêu-dùng bền vững.</strong>
          </div>
          <div className="banner-cauchuyen__logo">BANNER 3.</div>
        </div>
      </Carousel>
    </div>
  )
}

export default bannerCauchuyen
