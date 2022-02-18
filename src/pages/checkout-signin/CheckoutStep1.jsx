import React from 'react'
import { DivCheckoutStep1 } from './index.style'
import { Row, Col, Table } from 'antd'
import Giaydo from '../../assets/images/shop/giaydo.png'
import { DownOutlined } from '@ant-design/icons'
import { Steps, Button, message, Input, Select } from 'antd'

import './index.style'

const columns = [
  {
    title: 'Address',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    responsive: ['md'],
  },
]

const data = [
  {
    key: '1',
    name: (
      <div className="checkoutstep1__table">
        <h5>nội thành TP.HCM</h5>
        <p>23 ngày làm việc</p>
      </div>
    ),
    price: '0 VNĐ',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: (
      <div className="checkoutstep1__table">
        <h5>các tỉnh thành khác</h5>
        <p>3-7 ngày làm việc</p>
      </div>
    ),
    price: '30 000 VNĐ',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: (
      <div className="checkoutstep1__table">
        <h5>giao hàng nhanh</h5>
        <p>1-2 ngày làm việc</p>
      </div>
    ),
    price: '120 000 VNĐ',
    address: 'New York No. 1 Lake Park',
  },
]
//STEPS
const { Step } = Steps

//Input
const { Option } = Select
// const options = {
//   value: 'zhejiang',
//   label: 'Zhejiang',
//   children: [
//     {
//       value: 'hangzhou',
//       label: 'Hangzhou',
//       children: [
//         {
//           value: 'xihu',
//           label: 'West Lake',
//         },
//       ],
//     },
//   ],
// }

const CheckoutStep1 = () => {
  const click__table = () => {
    console.log('<<<CLick ME')
  }
  const steps = [
    {
      title: <h1>1</h1>,
      content: (
        <div className="checkoutstep1__content1">
          <h4>phương-thức giao nhận</h4>
          <p>
            địa chỉ giao hàng hiện tại của bạn hiện ở
            <strong>
              Việt Nam <DownOutlined />
            </strong>
          </p>
          <div className="checkoutstep1__phai-table">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      ),
    },
    {
      title: <h1>2</h1>,
      content: (
        <div className="checkoutstep1__content1">
          <h4>thông tin giao nhận hàng</h4>
          <p>nhập địa chỉ nhận hàng</p>
          <Input placeholder="họ tên" />
          <Input placeholder="số điện thoại" />
          <Input placeholder="địa chỉ" />
          <Input.Group compact>
            <Select defaultValue="tỉnh">
              <Option value="Zhejiang">Quảng Ngãi</Option>
              <Option value="Jiangsu">Đồng Nai</Option>
              <Option value="Jiangsu">Bến Tre</Option>
              <Option value="Jiangsu">Cà Mau</Option>
              <Option value="Jiangsu">Sóc Trăng</Option>
            </Select>
            <Input style={{ width: '41%' }} placeholder="huyện/thành phố" />
          </Input.Group>
        </div>
      ),
    },
    {
      title: <h1>3</h1>,
      content: (
        <div className="checkoutstep1__content1">
          <h4>phương-thức thanh toán</h4>
          <p>bạn chọn thanh toán thế nào ?</p>

          <table className="table">
            <tbody>
              <tr>
                <td onClick={() => click__table()}>
                  Thẻ tín dụng / <br />
                  thẻ ghi nợ
                </td>
                <td>ví điện tử MoMo</td>
              </tr>
              <tr>
                <td>
                  chuyển khoản <br />
                  ngân hàng
                </td>
                <td>QR ZaloPay</td>
              </tr>
              <tr>
                <td>VN Pay</td>
                <td>
                  thanh toán khi <br /> nhận hàng / COD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: <h1>4</h1>,
      content: (
        <div className="checkoutstep1__content1">
          <h4>thông tin đơn hàng </h4>
          <div className="checkoutstep1__buoc4">
            <p>liên hệ</p>
            <h5>truc@dcsg.vn</h5>
          </div>
          <div className="checkoutstep1__buoc4">
            <p>gửi đến</p>
            <div>
              <h5>Huỳnh Quang Ngọc Hoàng</h5>
              <h5>0908123456</h5>
              <strong>23A Lê Quý Đôn,Phường 6,</strong>
              <strong>Quận 3,TPHCM</strong>
            </div>
          </div>
          <div className="checkoutstep1__buoc4">
            <p>giao nhận</p>
            <h5>
              giao hàng nhanh <strong>(1-2 ngày làm việc)</strong>
            </h5>
          </div>
          <div className="checkoutstep1__buoc4">
            <p>thanh toán</p>
            <h5>
              VISA credit card <strong>***-4327</strong>
            </h5>
          </div>
        </div>
      ),
    },
  ]

  const [current, setCurrent] = React.useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <DivCheckoutStep1 className="checkoutstep1">
      <Row>
        <Col
          className="checkoutstep1__trai"
          xl={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
        >
          <Row>
            <Col xl={{ span: 8 }}>
              <img src={Giaydo} alt="aa" />
            </Col>
            <Col xl={{ span: 16 }} className="checkoutstep1__trai-gia ">
              <h5>
                <strong>
                  vải Đời-mới quá-đỏ
                  <br />
                  nam - 40
                </strong>
              </h5>
              <div className="d-flex justify-content-between">
                <h5>sl : 1 </h5>
                <h5>
                  <strong>720 000 VNĐ</strong>
                </h5>
              </div>
            </Col>
            <Col xl={{ span: 8 }}>
              <img src={Giaydo} alt="aa" />
            </Col>
            <Col xl={{ span: 16 }} className="checkoutstep1__trai-gia ">
              <h5>
                <strong>
                  vải Đời-mới quá-đỏ
                  <br />
                  size M
                </strong>
              </h5>
              <div className="d-flex justify-content-between">
                <h5>sl : 1 </h5>
                <h5>
                  <strong>120 000 VNĐ</strong>
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              className="checkoutstep1__trai-thanhtoan d-flex justify-content-between "
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <h5>tạm tính </h5>
              <h5>840 000 VNĐ</h5>
            </Col>
            <Col
              className="checkoutstep1__trai-thanhtoan d-flex justify-content-between"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <h5>phí giao hàng</h5>
              <p>tính ở bước sau</p>
            </Col>
          </Row>
          <Row className="checkoutstep1__trai-rectangle ml-3"></Row>
          <Col
            className="mt-3 checkoutstep1__trai-thanhtoan d-flex justify-content-between "
            xl={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
          >
            <h5>
              <strong>tổng cộng</strong>
            </h5>
            <h5>
              <strong> 840 000 VNĐ </strong>
            </h5>
          </Col>
        </Col>
        <Col
          className="checkoutstep1__phai"
          xl={{ span: 16, offset: 0 }}
          sm={{ span: 16, offset: 0 }}
        >
          <>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  trở lại
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  tiếp tục
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                >
                  Done
                </Button>
              )}
            </div>
          </>
        </Col>
      </Row>
    </DivCheckoutStep1>
  )
}
export default CheckoutStep1
