import React from "react";
import "./banner.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const Navbar = () => {
  return (
    <div className="navbar row pt-0">
      <Swiper
        pagination={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="banner ">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="banner__title">tôi & ta</h1>
              <p className="banner__content">
                Phiên bản đặc biệt cho mùa lễ hôji 2021
              </p>
              <button className="btn btn-light banner__buynow">
                mua liền !
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner row">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="banner__title">tôi & ta</h1>
              <p className="banner__content">
                Phiên bản đặc biệt cho mùa lễ hôji 2021
              </p>
              <button className="btn btn-light banner__buynow">
                mua liền !
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner row">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="banner__title">tôi & ta</h1>
              <p className="banner__content">
                Phiên bản đặc biệt cho mùa lễ hôji 2021
              </p>
              <button className="btn btn-light banner__buynow">
                mua liền !
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Navbar;
