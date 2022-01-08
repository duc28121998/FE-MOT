import React from 'react'
import './shop.scss'
import IMG1 from '../../assets/images/ractangle-10-17.png'
import IMG2 from '../../assets/images/ractangle-10-18.png'
import IMG3 from '../../assets/images/ractangle-10-19.png'
import IMG4 from '../../assets/images/ractangle-10-20.png'

function Shop() {
  return (
    <div className="shop container">
      <div className="flex-col">
        <div className="shop__title">
          <span className="shop__title__a">xem hết mọi thứ</span>
        </div>
        <Giay2
          rectangle10={giay2Data.rectangle10}
          spanText={giay2Data.spanText}
          className={giay2Data.className}
          spanText2={giay2Data.spanText2}
        />
        <Giay2
          rectangle10={giay22Data.rectangle10}
          spanText={giay22Data.spanText}
          className={giay22Data.className}
          spanText2={giay22Data.spanText2}
        />
      </div>
      <div className="giay-container">
        <Giay2
          rectangle10={giay23Data.rectangle10}
          spanText={giay23Data.spanText}
          className={giay23Data.className}
          spanText2={giay23Data.spanText2}
        />

        <Giay2
          rectangle10={giay24Data.rectangle10}
          spanText={giay24Data.spanText}
          className={giay24Data.className}
          spanText2={giay24Data.spanText2}
        />
      </div>
    </div>
  )
}

export default Shop

function Giay2(props) {
  const { rectangle10, spanText, spanText2, className } = props

  return (
    <div className={`giay ${className || ''}`}>
      <img className="rectangle-10" src={rectangle10} alt="My Awesome " />

      <div className="giay__title">
        <span className="giay__title">{spanText}</span>
      </div>
      <h1 className="giay__title-big">
        <span className="giay__title-big">{spanText2}</span>
      </h1>
    </div>
  )
}

const giay2Data = {
  rectangle10: IMG1,
  spanText: 'giày',
  spanText2: 'Một đôi nguyên ngày',
  className: 'giay',
}

const giay22Data = {
  rectangle10: IMG2,
  spanText: 'dép',
  spanText2: 'ngang mà sang',
  className: 'giay-2',
}

const giay23Data = {
  rectangle10: IMG3,
  spanText: 'phụ kiện',
  spanText2: 'Một đôi nguyên ngày',
  className: 'giay',
}

const giay24Data = {
  rectangle10: IMG4,
  spanText: 'áo mưa',
  spanText2: 'bất chấp thời tiết',
  className: 'giay-4',
}
