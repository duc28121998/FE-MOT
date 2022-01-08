import React from 'react'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { DivTestDesktop } from './index.style'
import TestMobile from './TestMobile'
import TestTablet from './TestTablet'
import './index.style'
const Test = () => {
  // neu la mobile thi render ra cai nay

  if (isMobileOnly) return <TestMobile />
  // neu la tablet thi render cai nay ok chua. .conf file scss cứ viết riêng ra luôn đúng k.
  if (isTablet) return <TestTablet />
  return (
    <DivTestDesktop
      className="d-flex align-items-center justify-content-center"
      style={{ background: 'red', minHeight: '100vh', color: '#000' }}
    >
      <h1>This is Desktop</h1>
    </DivTestDesktop>
  )
}

export default Test
