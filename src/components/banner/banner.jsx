import React from 'react'
import './banner.scss'
import { Carousel } from 'antd'

// rafce
const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        {/* 1 */}

        <div className="banner__size">
          <div className="banner__title">tôi & ta</div>
          <div className="banner__content">
            phiên bản đặc-biệt cho mùa lễ hội 2021
          </div>
          <a href="\shop">
            <div className="banner__buynow">mua liền !</div>
          </a>
        </div>

        {/* 2 */}

        <div className="banner__size">
          <div className="banner__title">tôi & ta</div>
          <div className="banner__content">
            phiên bản đặc-biệt cho mùa lễ hội 2022
          </div>
          <a href="\shop">
            <div className="banner__buynow">mua liền !</div>
          </a>
        </div>
        {/* 3 */}
        <div className="banner__size">
          <div className="banner__title">tôi & ta</div>
          <div className="banner__content">
            phiên bản đặc-biệt cho mùa lễ hội 2023
          </div>
          <a href="\shop">
            <div className="banner__buynow">mua liền !</div>
          </a>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
