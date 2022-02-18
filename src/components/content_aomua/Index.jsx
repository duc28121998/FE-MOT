import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import './index.style'
import DivAoMua from './Aomua'
import DivAoMuaMobile from './AomuaMobile'
const AoMuaGlobal = () => {
  // neu la mobile thi render ra cai nay

  if (isMobileOnly) return <DivAoMuaMobile />
  return <DivAoMua />
}

export default AoMuaGlobal
