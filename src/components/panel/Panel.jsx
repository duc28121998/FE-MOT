import React from 'react'
import { DivPanel } from './index.style'

const Panel = ({ active, header, key, children }) => {
  console.log({ active, header, key, children })
  return (
    <DivPanel active={true} header={header} key={key}>
      {children}
    </DivPanel>
  )
}

export default Panel
