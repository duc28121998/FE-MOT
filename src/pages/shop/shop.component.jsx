import React from 'react'
import './shop.component.scss'
import { Loc, Tab } from '../../assets/svgs/index'
import ContentDoimoi from '../../components/content_doimoi/doimoi'
import Contenttoita from '../../components/content_toita/content_toita'
import Contentdoithuong from '../../components/content_doithuong/doithuong'
import ContentTrietly from '../../components/content_trietly/contentTrietly'
import ContentVo from '../../components/content_vo/contentVo'
import ContentAomua from '../../components/content_aomua/aomua'
import Doithuong from '../../components/content_doithuong/doithuong'
import Dep from '../../components/dep/dep'

const ShopPage = () => (
  <div className="shop-page ">
    <div className="d-flex p-2 shop-page__name">Một cho mọi người</div>
    <div className="d-flex shop-page__title">
      <div className="p-2 shop-page__name-mobile">tất cả</div>
      <div className="p-2 shop-page__name-an  ">giày</div>
      <div className="p-2 shop-page__name-an">dép</div>
      <div className="p-2 shop-page__name-an">phụ kiện</div>
      <div className="p-2 shop-page__name-an">áo mưa</div>
      <div className="p-2  shop-page__name-icon shop-page__name-mobile ">
        <Tab />
      </div>

      <div className="ml-auto p-2 shop-page__title-loc">
        lọc
        <Loc />
      </div>
    </div>
    {/* <Contentdoimoi /> */}
    <ContentDoimoi />
    {/* bản đặc biệt tôi & ta  */}

    <Contenttoita />

    {/* banner 2 đảo nghịch lại*/}
    <Contentdoithuong />

    {/* content Triết Lý */}
    <ContentTrietly />

    {/* content Dép  */}

    <Dep />

    {/* content Áo Mưa  */}
    <ContentAomua />

    {/* content Vớ  */}
    <ContentVo />
  </div>
)

export default ShopPage
