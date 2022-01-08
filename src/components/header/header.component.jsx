import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// import { auth } from '../../firebase/firebase.utils.js'

import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx'
import { selectCartHidden } from '../../redux/cart/cart.selectors.js'
import { selectCurrentUser } from '../../redux/user/user.selector.js'
import { IconMenu, Logo, Ticker, Sneaker } from '../../assets/svgs/index'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header row">
    <Link className="logo-container" to="/">
      <IconMenu />
    </Link>

    <div className="options">
      <Logo />
    </div>
    {hidden ? null : <CartDropdown />}
    <div className="king">
      <div className="pr-4">
        <Ticker />
      </div>
      <div>
        <Sneaker /> <strong>0</strong>
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
