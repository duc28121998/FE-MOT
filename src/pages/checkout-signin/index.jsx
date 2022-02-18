import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import './index.style'
import DivCheckout from './Checkout'
import DivCheckoutMobile from './CheckouMobile'
const CheckoutGlobal = () => {
  if (isMobileOnly) return <DivCheckoutMobile />
  return <DivCheckout />
}

export default CheckoutGlobal
