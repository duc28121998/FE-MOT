import React, { useState } from 'react'
import './thacmac.style.scss'
import { Row, Col } from 'antd'
import { DivThacmac } from './index.style'
import Icon from '../../assets/images/icon/IconCong.png'
import { Collapse } from 'antd'
import { DivCollapse } from './index.style'
import { DivCollapseHeader, DivTabs } from './index.style'
import { Instagram, Socialface } from '../../assets/svgs/index'

import Buoc1 from '../../assets/images/thacmac/buoc1.png'
import Buoc2 from '../../assets/images/thacmac/buoc2.png'
import Buoc3 from '../../assets/images/thacmac/buoc3.png'
import Doimoikoday from '../../assets/images/thacmac/doimoicoday.png'
import Doithuongkhongday from '../../assets/images/thacmac/doithuongkhongday.png'
import Sizenu from '../../assets/images/thacmac/sizegiaynu.png'
import Sizenam from '../../assets/images/thacmac/sizegiaynam.png'

import { Tabs, Radio, Space } from 'antd'

//Tabs
const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}

//Collapse
const { Panel } = Collapse

const thacmac = () => {
  return (
    <div className="thacmac">
      <DivThacmac>
        <Row className="thacmac__title">
          <Col
            className="thacmac__banhoi"
            xl={{ span: 6, offset: 0 }}
            sm={{ span: 6, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <h1>bạn hỏi</h1>
          </Col>
          <Col
            className="thacmac__rectangle"
            xl={{ span: 2, offset: 3 }}
            sm={{ span: 2, offset: 3 }}
            xs={{ span: 6, offset: 0 }}
          ></Col>
          <Col
            className="thacmac__mot"
            xl={{ span: 6, offset: 5 }}
            sm={{ span: 6, offset: 5 }}
            xs={{ span: 24, offset: 0 }}
          >
            <h1>Một trả lời !</h1>
          </Col>
        </Row>
        {/* <Row className="thacmac__list ">
          <Col
            className="thacmac__list-trai"
            sm={{ span: 6, offset: 0 }}
            xl={{ span: 6, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <h3>về Một sản phẩm</h3>
          </Col>
          <Col
            className="thacmac__list-phai "
            xl={{ span: 2, offset: 16 }}
            sm={{ span: 2, offset: 16 }}
            xs={{ span: 24, offset: 0 }}
          >
            <img src={Icon} alt="" />
          </Col>
        </Row> */}

        {/* Collapse  */}
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          {/* VỀ MỘT SẢN PHẨM  */}

          <DivCollapseHeader>
            <Panel header="về Một sản phẩm" key="1">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 2, offset: 0 }}
                  sm={{ span: 2, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>giày</h4>
                </Col>
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 5, offset: 1 }}
                  sm={{ span: 5, offset: 1 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <h4>Đời mới / Đời thường ?</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 2 }}
                  sm={{ span: 12, offset: 2 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <p>
                    <strong> Đời-mới </strong>là dòng giày đầu tiên Một ra mắt
                    thị trường. Đời-mới có dây vì vậy dễ điều chỉnh hơn cho bàn
                    chân rộng bề ngang. dây giày Đời-mới có thể được cột lại và
                    giấu vào bên trong - tuỳ sở thích người mang
                    <br />
                  </p>
                  <p>
                    <strong>Đời-thường </strong> là dòng giày dành cho những ai
                    mê sự nhanh gọn. Đời-thường không có dây mà thay vào đó là
                    bản dây thun, giúp người mang xỏ chân, kéo gót và bước đi -
                    tự do làm điều mình thích
                  </p>
                </Col>

                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 6, offset: 3 }}
                  sm={{ span: 6, offset: 3 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>da / vải ?</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 1 }}
                  sm={{ span: 12, offset: 1 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <p>
                    Một chọn da bò thật cho các sản phẩm giày. da thật êm, bền
                    đẹp với thời gian và co dãn nhẹ theo bàn chân người mang
                    <br />
                  </p>
                  <p>
                    Một chọn vải bố cô-tông 100% cho các sản phẩm giày vải, để
                    chân bạn thoáng nhẹ thoải mái suốt ngày dài
                  </p>
                </Col>
              </Row>

              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 2, offset: 0 }}
                  sm={{ span: 2, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>phụ kiện</h4>
                </Col>
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 5, offset: 1 }}
                  sm={{ span: 5, offset: 1 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <h4>miếng lót</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 2 }}
                  sm={{ span: 12, offset: 2 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <p>
                    độ êm của Một cặp lót giày đến từ thiết kế công thái học
                    nâng đỡ bàn chân trong mọi chuyển động thường ngày
                    <br />
                  </p>
                  <p>
                    chất liệu mút-xốp polyurethane tế-bào mở (open-cell PU foam)
                    mang đến độ nhún bền bỉ, êm mà lại thoáng khí
                  </p>
                  <p>
                    Một cặp lót được thiết kế riêng cho các sản phẩm giày Một;
                    có thể không tương thích với các dòng giày thuộc các hãng
                    khác
                  </p>
                  <p>
                    sản phẩm không áp dụng đổi – trả, bạn lưu ý đọc kỹ hướng dẫn
                    trước khi mua hàng
                  </p>
                </Col>
              </Row>
            </Panel>
          </DivCollapseHeader>
          {/*END VỀ MỘT SẢN PHẨM  */}

          {/* ĐO SIZE THẾ NÀO ? => LÀM SAO ĐO CHÂN  */}
          <DivCollapseHeader>
            <Panel header="đo size thế nào ?" key="2">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 10, offset: 0 }}
                  sm={{ span: 12, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>làm sao đo chân</h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 0 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <img src={Buoc1} alt="" />
                  </div>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 0 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <p>
                      <strong> bước 1 </strong>
                      <br /> — chọn một mặt phẳng <br /> — lót một miếng giấy{' '}
                      <br /> — đứng lên giấy, sao cho gót chân chạm sát tường
                    </p>
                  </div>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 10 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <img src={Buoc2} alt="" />
                  </div>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 0 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <p>
                      <strong> bước 2 </strong>
                      <br />— đo bề dài chân:
                      <br /> dùng bút đánh dấu điểm xa nhất của bàn chân tính từ
                      gót chân, đo hai chân và chọn số đo lớn hơn
                    </p>
                  </div>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 10 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <img src={Buoc3} alt="" />
                  </div>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 6, offset: 0 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <div className="dochan">
                    <p>
                      <strong> bước 3 </strong>
                      <br /> — đo bề ngang chân:
                      <br /> dùng thước dây siết nhẹ thành vòng ngay phần bè
                      nhất của bàn chân; đo hai chân và chọn số đo lớn hơn
                    </p>
                  </div>
                </Col>
                {/* cach  */}
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 6, offset: 3 }}
                  sm={{ span: 6, offset: 3 }}
                  xs={{ span: 24, offset: 0 }}
                ></Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 1 }}
                  sm={{ span: 12, offset: 1 }}
                  xs={{ span: 22, offset: 2 }}
                >
                  <p>
                    <strong>Một vài lưu ý khi đo chân</strong>
                    <br />— luôn <strong>đo cả hai chân</strong> và chọn số đo
                    lớn hơn
                    <br />
                    — nếu bể ngang chân to hơn, nên chọn size nam, nếu bể ngang
                    chân mỏng hơn, nên chọn size nữ
                    <br />— nên <strong>siết nhẹ thước dây</strong> khi đo bể
                    chân ngang, vì giày cũng sẽ ôm sát theo chân
                    <br />— luôn chọn size theo số đo lớn hơn (ví dụ: bàn chân
                    nữ dài 22cm, tương ứng size 35W, nhưng vòng chân là 21.5cm
                    thì nên chọn size 36)
                  </p>
                </Col>
              </Row>
              {/*END > ĐO SIZE THẾ NÀO ? => LÀM SAO ĐO CHÂN  */}

              {/* SIZE GIÀY NỮ  */}
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 2, offset: 0 }}
                  sm={{ span: 2, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>giày</h4>
                </Col>
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 20, offset: 1 }}
                  sm={{ span: 20, offset: 1 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <DivTabs>
                    <Tabs
                      defaultActiveKey="1"
                      tabPosition="left"
                      onChange={callback}
                    >
                      <TabPane tab="size giày nữ " key="1">
                        <Row>
                          <Col
                            className="ant-col-sizenu"
                            xl={{ span: 13, offset: 5 }}
                            sm={{ span: 13, offset: 5 }}
                            xs={{ span: 24, offset: 0 }}
                          >
                            <img
                              className="ant-col-sizenu-img1"
                              src={Doimoikoday}
                              alt=""
                            />
                            <img
                              className="ant-col-sizenu-img2"
                              src={Sizenu}
                              alt=""
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col
                            className="ant-col-sizenu"
                            xl={{ span: 13, offset: 5 }}
                            sm={{ span: 13, offset: 5 }}
                            xs={{ span: 24, offset: 0 }}
                          >
                            <img
                              className="ant-col-sizenu-img3"
                              src={Doithuongkhongday}
                              alt=""
                            />
                            <img
                              className="ant-col-sizenu-img2"
                              src={Sizenam}
                              alt=""
                            />
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="size giày nam" key="2">
                        <Row>
                          <Col
                            className="ant-col-sizenu"
                            xl={{ span: 13, offset: 5 }}
                            sm={{ span: 13, offset: 5 }}
                            xs={{ span: 24, offset: 0 }}
                          >
                            <img
                              className="ant-col-sizenu-img1"
                              src={Doimoikoday}
                              alt=""
                            />
                            <img
                              className="ant-col-sizenu-img2"
                              src={Buoc1}
                              alt=""
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col
                            className="ant-col-sizenu"
                            xl={{ span: 13, offset: 5 }}
                            sm={{ span: 13, offset: 5 }}
                            xs={{ span: 24, offset: 0 }}
                          >
                            <img
                              className="ant-col-sizenu-img3"
                              src={Doithuongkhongday}
                              alt=""
                            />
                            <img
                              className="ant-col-sizenu-img2"
                              src={Sizenam}
                              alt=""
                            />
                          </Col>
                        </Row>
                      </TabPane>
                    </Tabs>
                  </DivTabs>
                </Col>

                {/* 
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 5, offset: 1 }}
                  sm={{ span: 6, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                 
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 2 }}
                  sm={{ span: 12, offset: 2 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    <strong> Đời-mới </strong>là dòng giày đầu tiên Một ra mắt
                    thị trường. Đời-mới
                    <br />
                  </p>
                  <p>
                    <strong>Đời-thường </strong> là dòng giày dành cho những ai
                    mê sự nhanh gọn. Đời-thường
                  </p>
                </Col> */}
              </Row>
              {/* END SIZE GIÀY NỮ  */}
            </Panel>
          </DivCollapseHeader>
          {/* END DO SIZE THE NAO  */}
          {/* CHĂM SÓC GIÀY  */}
          <DivCollapseHeader>
            <Panel header="chắm sóc giày" key="3">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 2, offset: 0 }}
                  sm={{ span: 2, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>giày</h4>
                </Col>
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 5, offset: 1 }}
                  sm={{ span: 5, offset: 1 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>da/vải</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 2 }}
                  sm={{ span: 12, offset: 2 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    với các <strong> sản phẩm da </strong> bạn nhớ tránh dính
                    nước, dính mưa và nếu cần làm sạch xin hãy tìm đến cách dịch
                    vụ uy tín !
                    <br />
                  </p>
                  <p>
                    bạn có thể làm vệ sinh <strong> giày vải </strong> theo cách
                    bên dưới : <br /> — pha loãng dầu gội / dầu tắm <br /> —
                    dùng bàn chải đánh răng nhẹ nhàng chải lên bề mặt giày bị
                    dính bẩn <br /> — rửa sạch xà bông với nuớc <br /> — bọc
                    những nơi bị thấm ướt bằng giấy ăn để giày được khô hoàn
                    toàn <br /> — phơi ở nơi râm mát, tránh ánh nắng trực tiếp
                  </p>
                  <link rel="stylesheet" href="" />
                </Col>
              </Row>
            </Panel>
          </DivCollapseHeader>
          {/* END CHĂM SÓC GIÀY  */}

          {/* PHƯƠNG THỨC THANH TOÁN  */}
          <DivCollapseHeader>
            <Panel header="phuong-thức thanh toán" key="4">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>các phương thức</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    Một chấp nhận phương thức COD (thanh toán khi nhận hàng) và
                    thanh toán thẻ, thanh toán qua ví điện tử trực tuyến khi mua
                    hàng tại www.motdoigiay.vn/shop
                  </p>
                </Col>
              </Row>
            </Panel>
          </DivCollapseHeader>
          {/* END PHƯƠNG THỨC THANH TOÁN  */}

          {/* CHÍNH - SÁCH BẢO HÀNH ĐỔI - TRẢ  */}
          <DivCollapseHeader>
            <Panel header="chính-sách bảo hành và đổi-trả" key="5">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 2, offset: 0 }}
                  sm={{ span: 2, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>giày</h4>
                </Col>
                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 5, offset: 1 }}
                  sm={{ span: 5, offset: 1 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>điều kiện chung</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 2 }}
                  sm={{ span: 12, offset: 2 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    <strong>
                      {' '}
                      Một thực hiện chính sách đổi – trả dễ dàng để bạn luôn vui
                      khi mua hàng !
                    </strong>
                    <br />
                  </p>
                  <p>
                    các sản phẩm giày của Một đều được hưởng chính sách đổi –
                    trả trong vòng 30 ngày kể từ ngày giày được giao đi, khi
                    thoả các điều kiện sau : <br /> — giày chưa mang (đế còn mới
                    nguyên) <br /> — giày còn nguyên vẹn không hư hỏng <br /> —
                    túi và hộp giày còn mới nguyên, không hư hỏng và chưa qua sử
                    dụng <br /> — mời bạn lưu ý các điều sau khi đổi <br /> –
                    trả Một sản phẩm :
                  </p>
                </Col>

                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 6, offset: 3 }}
                  sm={{ span: 6, offset: 3 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>với trả hàng</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 1 }}
                  sm={{ span: 12, offset: 1 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    Một sẽ khấu trừ phí lưu kho 100.000đ/một đôi giày, khoản này
                    chưa bao gồm tiền phí giao nhận hàng – tức là bạn sẽ phải
                    chịu tiền phí vận chuyển khi trả lại sản phẩm và khoản tiền
                    Một chuyển lại cho bạn sẽ bị trừ đi 100.000đ/một đôi giày
                  </p>
                </Col>

                <Col
                  className="thacmac__inlist-hai"
                  xl={{ span: 6, offset: 3 }}
                  sm={{ span: 6, offset: 3 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>với đổi hàng</h4>
                </Col>
                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 1 }}
                  sm={{ span: 12, offset: 1 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    Một sẽ không khấu trừ phí lưu kho với trường hợp đổi giày
                    tuy nhiên bạn sẽ phải chịu tiền phí vận chuyển trong quá
                    trình đổi sản phẩm
                    <br />
                  </p>
                  <p>
                    chính sách đổi giày chỉ áp dụng đổi đồng giá; tức giày chất
                    liệu nào sẽ được đổi size, màu, kiểu, cùng chất liệu, cùng
                    giá bán; không áp dụng đổi khác chất liệu
                  </p>
                  <p>
                    với các sản phẩm được mua tại các điểm bán của Một đối tác,
                    bạn vui lòng đổi trả tại đúng điểm bán
                  </p>
                  <p>
                    nếu bạn nghi ngờ sản phẩm mình mua mắc phải lỗi sản xuất,
                    liên hệ ngay với Một qua e-mail{' '}
                    <strong> hello@motdoigiay.vn </strong> hoặc trang facebook
                    của Một <strong> www.facebook.com/motdoigiay </strong>;
                    chúng tôi sẽ giải quyết các trường hợp đổi – trả nhanh nhất
                    có thể
                  </p>
                  <p>
                    nếu bạn có nhầm lẫn trong khi mua hàng, đừng ngần ngại tìm
                    đến team Một. chúng tôi sẽ làm mọi điều tốt nhất để hỗ trợ
                    bạn trong khoảng thời gian ngắn nhất
                  </p>
                </Col>
              </Row>

              {/* ÁO MƯA  */}
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>áo mưa</h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    — Một áp dụng chính sách 1 đổi 1 cho các sản phẩm áo mưa mắc
                    phải lỗi sản xuất <br /> — với các trường hợp đổi màu /
                    size, Một chỉ áp dụng đổi khi áo mưa còn nguyên trong bao
                    chưa xé <br /> — Một không áp dụng chính sách trả hàng với
                    áo mưa
                  </p>
                </Col>
              </Row>

              {/* END ÁO MƯA  */}

              {/* PHỤ KIỆN  */}
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>phụ kiện </h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    — chỉ áp dụng chính sách 1 đổi 1 khi sản phẩm mắc lỗi sản
                    xuất <br /> — không áp dụng chính sách đổi - trả với hàng
                    đúng quy cách
                  </p>
                </Col>
              </Row>
              {/* END PHỤ KIỆN  */}
            </Panel>
          </DivCollapseHeader>
          {/* END CHÍNH - SÁCH BẢO HÀNH ĐỔI - TRẢ  */}

          {/* LIÊN HỆ  */}
          <DivCollapseHeader>
            <Panel header="liên hệ" key="6">
              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>bằng điện thoại</h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    số hotline : nhận điện từ 09:30 - 22:00, thứ Hai đến Chủ
                    Nhật
                  </p>
                  <h3 className="thacmac__inlist-lienhe">0774164406</h3>
                </Col>
              </Row>

              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>bằng facebook </h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>chat với Một từ 09:30 – 18:00; từ Thứ Hai đến Thứ Sáu</p>
                  <h3 className="thacmac__inlist-lienhe">
                    <Instagram /> facebook.com/motdoigiay
                  </h3>
                </Col>
              </Row>

              <Row className="thacmac__inlist ">
                <Col
                  className="thacmac__inlist-mot"
                  xl={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <h4>bằng email </h4>
                </Col>

                <Col
                  className="thacmac__inlist-ba "
                  xl={{ span: 12, offset: 6 }}
                  sm={{ span: 12, offset: 6 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <p>
                    bạn vui lòng gửi email đến{' '}
                    <strong> hello@motdoigiay.vn </strong> hoặc điền vào form
                    dưới đây, Một sẽ trả lời bạn trong thời gian sớm nhất
                  </p>
                </Col>
              </Row>
              {/* END PHỤ KIỆN  */}
            </Panel>
          </DivCollapseHeader>
          {/* END LIÊN HỆ  */}
        </Collapse>
      </DivThacmac>
    </div>
  )
}

export default thacmac
