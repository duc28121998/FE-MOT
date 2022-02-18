import React from 'react'
import { DivSelectSize } from './colorGiay.style'
const SelectSize = ({
  className = '',
  size = '35',
  active = false,
  onClick = () => {},
}) => {
  return (
    <DivSelectSize
      className={className}
      onClick={onClick}
      size={size}
      active={active}
    >
      <div className="background">
        <div className="background-children" />
      </div>
    </DivSelectSize>
  )
}

export default SelectSize
