import React from 'react'
import { DivSelectColor } from './index.style'

const SelectColor = ({
  className = '',
  color = '#fff',
  active = false,
  onClick = () => {},
}) => {
  return (
    <DivSelectColor
      className={className}
      onClick={onClick}
      color={color}
      active={active}
    >
      <div className="background">
        <div className="background-children" />
      </div>
    </DivSelectColor>
  )
}

export default SelectColor
