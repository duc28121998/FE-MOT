import React from 'react'
import { isMobile } from 'react-device-detect'
import './index.style'
import DivMobileDoiThuong from './Mobiledoithuong'
import DivDoithuong from './doithuong'
const DoiThuongGlobal = () => {
  if (isMobile) {
    return <DivMobileDoiThuong></DivMobileDoiThuong>
  }
  return <DivDoithuong></DivDoithuong>
}

export default DoiThuongGlobal
