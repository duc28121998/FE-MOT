import React, { useState } from 'react'
import { DivAccount, DivInput, DivCollapseAccount } from './index.style'
import { Row, Col, Collapse } from 'antd'
import { DivCollapseHeader, DivPanel } from '../../components/panel/index.style'
// import Panel from '../../components/panel/Panel'
import { Blackmatcuoi } from '../../assets/svgs/index'
import { Form, Button } from 'antd'
import {
  IconMorong,
  IconDangXuat,
  IconMatCuoiMini,
} from '../../assets/svgs/index'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { BackgroundRangCua } from '../../assets/svgs/index'
const { Panel } = Collapse
const Account = ({
  className = '',

  onClick = () => {},
}) => {
  //   const Test = ({ children }) => {
  //     console.log('----test')
  //     return <h3>{children}</h3>
  //   }
  const [active, setActive] = useState([])
  function callback(key) {
    setActive(key)
    console.log(key)
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const mockup = {
    name: 'Duc Cong',
    phone: '0868 187 225',
    address: '107 Phan Van Tri',
  }
  const [form] = Form.useForm()

  return (
    <div>
      <DivAccount>
        <Row>
          <Col
            className="account__title"
            xl={{ span: 10, offset: 0 }}
            sm={{ span: 10, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <div className="account__matcuoi">
              <Blackmatcuoi width="86px" height="86px" />
            </div>
            <h1>
              chào <br /> Hoàng !
            </h1>
            <div className="account__dangxuat">
              <IconDangXuat />
              <h5>đăng xuất</h5>
            </div>
            <div className="account__xoataikhoan">
              <IconMatCuoiMini />
              <h5>xóa tài khoản vĩnh viễn</h5>
            </div>
          </Col>
          <Col
            className="account__list"
            xl={{ span: 14, offset: 0 }}
            sm={{ span: 14, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <DivCollapseHeader
              defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition="right"
              expandIcon={({ isActive }) => {
                return (
                  <div>
                    <div className="h-100 d-flex align-items-center justify-content-center ">
                      <span style={{ fontSize: '28px' }}>
                        {isActive ? '-' : '+'}
                      </span>
                    </div>
                  </div>
                )
              }}
              className={className}
              onClick={onClick}
              active={active}
            >
              <DivPanel
                active={active.includes('1')}
                header="thông tin tài khoản"
                key="1"
              >
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={mockup}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <p>tùy chỉnh thông tin tài khoản bên dưới</p>

                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                    name="name"
                  >
                    <DivInput />
                  </Form.Item>

                  <Form.Item
                    // label="Password"
                    // name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    name="phone"
                  >
                    <DivInput />
                  </Form.Item>
                  <Form.Item
                    // label="Password"
                    // name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    name="address"
                  >
                    <DivInput />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button htmlType="submit">them dia chi khac</Button>
                  </Form.Item>
                </Form>

                <Form
                  name="basic"
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <p>mật mã tài khoản</p>
                    <DivInput placeholder={'mật mã cũ'} />
                  </Form.Item>

                  <Form.Item
                    // label="Password"
                    // name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <DivInput placeholder={'mật mã mới'} />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button htmlType="submit">đổi mật mã</Button>
                  </Form.Item>
                </Form>
                {/* END FORM  */}
              </DivPanel>
              <DivPanel
                active={active.includes('2')}
                header="lịch sử mua hàng"
                key="2"
              >
                <Row className="account__table">
                  <Col
                    xl={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <div className="account__table-title">
                      <Col xl={{ span: 4, offset: 0 }}>
                        <p>đơn hàng</p>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <p>ngày</p>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <p>tổng cộng</p>
                      </Col>
                      <Col xl={{ span: 8, offset: 0 }}>
                        <p>tình trạng</p>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <DivCollapseAccount
                  defaultActiveKey={['2']}
                  onChange={callback}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => {
                    return (
                      <div>
                        <div className="d-flex align-items-center justify-content-center ">
                          <span
                            style={{
                              fontSize: '20px',
                            }}
                          >
                            {isActive ? <UpOutlined /> : <DownOutlined />}
                          </span>
                        </div>
                      </div>
                    )
                  }}
                  className={className}
                  onClick={onClick}
                  active={active}
                >
                  <Panel
                    active={active.includes('3')}
                    header={
                      <Col
                        xl={{ span: 24, offset: 0 }}
                        sm={{ span: 24, offset: 0 }}
                        xs={{ span: 24, offset: 0 }}
                      >
                        <div className="account__table-desc">
                          <Col xl={{ span: 4, offset: 0 }}>
                            <h5>7199</h5>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <h5>19.03.2021</h5>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <h5>420 000 VNĐ</h5>
                          </Col>
                          <Col xl={{ span: 8, offset: 0 }}>
                            <div className="account__table-tinhtrang">
                              <h5>đã nhận hàng</h5>
                            </div>
                          </Col>
                        </div>
                      </Col>
                    }
                    key="1"
                  >
                    {/* tab bên trong lịch sử mua hàng */}
                    <Row className="account__table-in">
                      <Col
                        xl={{ span: 24, offset: 0 }}
                        sm={{ span: 24, offset: 0 }}
                        xs={{ span: 24, offset: 0 }}
                      >
                        <div className="account__table-title">
                          <Col xl={{ span: 4, offset: 0 }}>
                            <p>đơn hàng</p>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <p>ngày</p>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <p>tổng cộng</p>
                          </Col>
                          <Col xl={{ span: 8, offset: 0 }}>
                            <p>tình trạng</p>
                          </Col>
                        </div>
                      </Col>
                      <Col
                        xl={{ span: 24, offset: 0 }}
                        sm={{ span: 24, offset: 0 }}
                        xs={{ span: 24, offset: 0 }}
                      >
                        <div className="account__table-desc">
                          <Col xl={{ span: 4, offset: 0 }}>
                            <h5>7199</h5>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <h5>19.03.2021</h5>
                          </Col>
                          <Col xl={{ span: 6, offset: 0 }}>
                            <h5>420 000 VNĐ</h5>
                          </Col>
                          <Col xl={{ span: 8, offset: 0 }}>
                            <div className="account__table-tinhtrang">
                              <h5>đang vận chuyển</h5>
                            </div>
                          </Col>
                        </div>
                        <div className="account__table-button">
                          <button>chi tiết đơn hàng</button>
                          <button>track order</button>
                        </div>
                      </Col>
                    </Row>
                    <BackgroundRangCua />
                    {/* end tab bên trong lịch sử mua hàng  */}
                  </Panel>
                </DivCollapseAccount>

                <Row className="account__table">
                  <Col
                    xl={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <div className="account__table-desc">
                      <Col xl={{ span: 4, offset: 0 }}>
                        <h5>7199</h5>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <h5>19.03.2021</h5>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <h5>420 000 VNĐ</h5>
                      </Col>
                      <Col xl={{ span: 8, offset: 0 }}>
                        <div className="account__table-tinhtrang">
                          <h5>đã nhận hàng</h5>
                          <strong>
                            <IconMorong />
                          </strong>
                        </div>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <Row className="account__table">
                  <Col
                    xl={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <div className="account__table-desc">
                      <Col xl={{ span: 4, offset: 0 }}>
                        <h5>7199</h5>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <h5>19.03.2021</h5>
                      </Col>
                      <Col xl={{ span: 6, offset: 0 }}>
                        <h5>420 000 VNĐ</h5>
                      </Col>
                      <Col xl={{ span: 8, offset: 0 }}>
                        <div className="account__table-tinhtrang">
                          <h5>đã nhận hàng</h5>
                          <strong>
                            <IconMorong />
                          </strong>
                        </div>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </DivPanel>
              <DivPanel
                active={active.includes('3')}
                header="khuyến mãi xịn (của riêng bạn)"
                key="3"
              >
                <div className="account__khuyenmai-button">
                  <button>15% cho lần đăng ký đầu tiên</button>
                </div>
                <div className="account__khuyenmai-button">
                  <button>20% off — chúc mừng sinh nhật !</button>
                </div>
              </DivPanel>
              <DivPanel
                active={active.includes('4')}
                header="tùy chỉnh e-mail"
                key="4"
              >
                <div>
                  <p>
                    đăng ký nhận mail để Một gửi bạn những tin tức mới nhất
                    (cũng như khuyến mãi đặc biệt){' '}
                  </p>
                  <div>
                    <h5>Newsletters</h5>
                  </div>
                  <p>
                    khi đăng ký Một tài khoản, chúng tôi thu thập địa chỉ mail
                    và các dữ liệu về bạn để nâng cao trải nghiệm mua sắm với sự
                    đồngt huận từ bạn rằng bạn đồng ý để chúng tôi cung cấp đến
                    bạn các email tin tức cũng như email kèm khuyến mãi cũng như
                    các email cập nhật tình trạng đơn hàng.{' '}
                  </p>
                </div>
              </DivPanel>
            </DivCollapseHeader>
          </Col>
        </Row>
      </DivAccount>
    </div>
  )
}

export default Account
