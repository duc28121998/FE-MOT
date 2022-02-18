import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import './index.style'
import DivThacMac from './thacmac'
import DivThacMacMobile from './thacmacmobile'
const ThacMacGlobal = () => {
  if (isMobileOnly) return <DivThacMacMobile />
  return <DivThacMac />
}

export default ThacMacGlobal
