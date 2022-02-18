import React, { useState, useEffect } from 'react'
import './shop.component.scss'
import { Loc, Tab, ShopThuocdo } from '../../assets/svgs/index'
import ContentDoimoi from '../../components/content_doimoi/doimoi'
import Contenttoita from '../../components/content_toita/content_toita'
import ContentTrietly from '../../components/content_trietly/contentTrietly'
import ContentVo from '../../components/content_vo/contentVo'
import Dep from '../../components/dep/dep'
import DoithuongTest from '../../components/content_doithuong/index'
import { Badge } from 'antd'
import AoMuaGlobal from '../../components/content_aomua/Index'
import { Drawer } from 'antd'
import Product from '../../components/color-giay/colorGiay'
import { Slider } from 'antd'
import SizeGiay from '../../components/size-giay/sizeGiay'
// function onChange(value) {
import { DivSlider } from './index.style'
//   console.log('onChange: ', value)
// }

function onAfterChange(value) {
  console.log('onAfterChange: ', value)
}
const ShopPage = ({
  className = '',

  onClick = () => {},
}) => {
  //CHỌN SIZE :
  const [active1, setActive1] = useState(null)
  const [active2, setActive2] = useState(null)
  const [active3, setActive3] = useState(null)

  useEffect(() => {
    setActive1(SizeNu[0].id)
    setActive2(SizeNam[0].id)
    setActive3(SizeNumber[0].id)
  }, [])

  const SizeNu = [
    {
      id: 1,
      size: '35',
    },
    {
      id: 2,
      size: '36',
    },
    {
      id: 3,
      size: '37',
    },
    {
      id: 4,
      size: '38',
    },
    {
      id: 5,
      size: '39',
    },
    {
      id: 6,
      size: '40',
    },
    {
      id: 7,
      size: '41',
    },
  ]

  const SizeNam = [
    {
      id: 1,
      size: '39',
    },
    {
      id: 2,
      size: '40',
    },
    {
      id: 3,
      size: '41',
    },
    {
      id: 4,
      size: '42',
    },
    {
      id: 5,
      size: '43',
    },
    {
      id: 6,
      size: '44',
    },
    {
      id: 7,
      size: '45',
    },
  ]

  const SizeNumber = [
    {
      id: 1,
      size: 'S',
    },
    {
      id: 2,
      size: 'M',
    },
    {
      id: 3,
      size: 'L',
    },
    {
      id: 4,
      size: 'XL',
    },
    {
      id: 5,
      size: 'Kids',
    },
  ]

  function onChange1(a) {
    setActive1(a)
  }
  function onChange2(a) {
    setActive2(a)
  }
  function onChange3(a) {
    setActive3(a)
  }
  //Slider :

  //End
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const [active, setActive] = useState(null)

  useEffect(() => {
    setActive(mockupData[0].id)
  }, [])

  const mockupData = [
    {
      id: 1,
      color: '#185549',
    },
    { id: 2, color: '#1D5AB5' },
    { id: 3, color: '#6D5093' },
    { id: 4, color: '#FF67A7' },
    { id: 5, color: 'red' },
    { id: 6, color: '#FA5D1A' },
    { id: 7, color: 'yellow' },
    { id: 8, color: 'black' },
    { id: 9, color: 'grey' },
    { id: 10, color: '#ADB4B9' },
  ]
  function onChange(a) {
    setActive(a)
  }
  if (!active) return <div />
  return (
    <div className="shop-page ">
      <div className="d-flex p-2 shop-page__name">Một cho mọi người</div>
      <div className="d-flex shop-page__title">
        <div className="p-2 shop-page__name-mobile">
          <Badge className="list_h5" count={5}>
            tất cả
          </Badge>
        </div>
        <div className="p-2 shop-page__name-an  ">
          <Badge className="list_h5" count={5}>
            giày
          </Badge>
        </div>
        <div className="p-2 shop-page__name-an">
          <Badge className="list_h5" count={5}>
            dép
          </Badge>
        </div>
        <div className="p-2 shop-page__name-an">
          <Badge className="list_h5" count={5}>
            phụ kiện
          </Badge>
        </div>
        <div className="p-2 shop-page__name-an">
          <Badge className="list_h5" count={5}>
            áo mưa
          </Badge>
        </div>
        <div className="p-2  shop-page__name-icon shop-page__name-mobile ">
          <Tab />
        </div>

        <div className="ml-auto p-2 shop-page__title-loc">
          <h5 onClick={showDrawer}>
            Loc <Loc />
          </h5>
          <Drawer title="" placement="top" onClose={onClose} visible={visible}>
            <div className="shop-page__loc">
              <h2>lọc</h2>
              <div className="shop-page__loc-trai">
                <h4>màu</h4>
                <Product
                  id={active}
                  listData={mockupData}
                  onChange={onChange}
                />
                <h5>
                  giá <strong>(ngàn VNĐ)</strong>
                </h5>

                <DivSlider
                  range={{ draggableTrack: true }}
                  defaultValue={[12, 147]}
                />
              </div>

              <div className="shop-page__loc-phai">
                <h4 className="d-flex justify-content-between">
                  size
                  <div>
                    <ShopThuocdo />
                    Đo size làm sao?
                  </div>
                </h4>
                <h5>giày nữ</h5>
                <SizeGiay id={active1} listData={SizeNu} onChange={onChange1} />
                <h5>giày nam</h5>
                <SizeGiay
                  id={active2}
                  listData={SizeNam}
                  onChange={onChange2}
                />
                <h5>size unisex</h5>

                <SizeGiay
                  id={active3}
                  listData={SizeNumber}
                  onChange={onChange3}
                />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
      {/* <Contentdoimoi /> */}
      <ContentDoimoi />
      {/* bản đặc biệt tôi & ta  */}

      <Contenttoita />

      {/* banner 2 đảo nghịch lại*/}
      {/* <Contentdoithuong /> */}
      <DoithuongTest />

      {/* content Triết Lý */}
      <ContentTrietly />

      {/* content Dép  */}

      <Dep />

      {/* content Áo Mưa  */}
      <AoMuaGlobal />

      {/* content Vớ  */}
      <ContentVo />
    </div>
  )
}
export default ShopPage
