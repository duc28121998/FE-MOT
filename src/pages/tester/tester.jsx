import React from 'react'
import ContentVo from '../../components/content_vo/contentVo'
import ContentTrietly from '../../components/content_trietly/contentTrietly'
import Footer from '../../components/footer/footer'
function tester() {
  return (
    <section className="total">
      <section className="a">
        <ContentVo />
      </section>
      <section></section>
      <ContentTrietly />
    </section>
  )
}

export default tester
