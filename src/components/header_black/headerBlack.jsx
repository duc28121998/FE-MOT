import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  Blackgiohang,
  Blackmenu,
  LogoBlackmot,
  Blackmatcuoi,
  Tab,
  LogoMotWhite,
  Whitematcuoi,
  Whitegiohang,
  Whitemenu,
} from '../../assets/svgs/index'

import './header_black.scss'

import { Drawer } from 'antd'
import { DivHeader } from './header.styles'
import { useLocation } from 'react-router-dom'
// rcc :
const HeaderBlack = () => {
  const [visible, setVisible] = useState(false)
  const onClose = () => setVisible(false)

  const location = useLocation()
  console.log('----location', location.pathname)
  // neu no active thi mau trang, khong active thi mau den
  const active = ['/', '/noiban'].includes(location.pathname)

  return (
    <>
      <DivHeader
        className="main-nav container-fluid px-0 px-lg-5 w-100"
        active={active}
      >
        <div className=" main-nav__menu" onClick={() => setVisible(true)}>
          {active ? <Whitemenu /> : <Blackmenu />}
        </div>

        <div className="main-nav__options">
          <a href="/">{active ? <LogoMotWhite /> : <LogoBlackmot />}</a>
        </div>

        <div className="d-flex align-items-center">
          <div className="main-nav__king mr-2">
            {active ? <Whitematcuoi /> : <Blackmatcuoi />}
          </div>
          <div className="main-nav__giohang">
            {active ? <Whitegiohang /> : <Blackgiohang />}
          </div>
        </div>
      </DivHeader>
      <Drawer
        placement="left"
        onClose={onClose}
        visible={visible}
        className="Drawer"
      >
        <div className="container">
          <div className="row align-items-start">
            <a href="/cauchuyen">
              <h2>câu-chuyện</h2>
            </a>
            <a href="/contact">
              <h2>cửa hàng</h2>
            </a>
            <a href="/noiban">
              <h2>nơi-bán</h2>
            </a>
            <a href="/thacmac">
              <h2>thắc-mắc</h2>
            </a>
          </div>
          <div className="row align-items-end ngonngu">
            <div className="col-6 col-lg-6">
              Ship to
              <strong>Vietnam</strong>
              <Tab />
              <br /> ThaiLand
            </div>
            <div className="col-6 col-lg-6">
              <strong>Tiếng Việt</strong>
              <Tab /> <br /> English
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )

  // const mapStateToProps = createStructuredSelector({
  //   currentUser: selectCurrentUser,
  //   hidden: selectCartHidden,
  // })
}
function Menu(props) {
  const { color } = this.props
  return <div style={{ backgroundColor: color }} className="color-box"></div>
}

// colorBox
export default HeaderBlack
// connect(mapStateToProps)(Header)
