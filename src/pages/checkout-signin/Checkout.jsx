import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Giaydo from '../../assets/images/shop/giaydo.png'
import { Row, Col, Form, Button } from 'antd'
import './index.style'
import '../../App'
import { DivCheckout, DivInput } from './index.style'
const Checkout = () => {
  // const [active, setActive] = useState([])
  // function callback(key) {
  //   setActive(key)
  //   console.log(key)
  // }
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const mockup = {
    name: 'email của bạn',
    phone: 'mật khẩu',
    address: '107 Phan Van Tri',
  }
  const [form] = Form.useForm()
  return (
    <DivCheckout className="checkout">
      <Row>
        <Col
          className="checkout__trai"
          xl={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
        >
          <Row>
            <Col xl={{ span: 8 }}>
              <img src={Giaydo} alt="aa" />
            </Col>
            <Col xl={{ span: 16 }} className="checkout__trai-gia ">
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
            <Col xl={{ span: 16 }} className="checkout__trai-gia ">
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
              className="checkout__trai-thanhtoan d-flex justify-content-between "
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <h5>tạm tính </h5>
              <h5>840 000 VNĐ</h5>
            </Col>
            <Col
              className="checkout__trai-thanhtoan d-flex justify-content-between"
              xl={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <h5>phí giao hàng</h5>
              <p>tính ở bước sau</p>
            </Col>
          </Row>
          <Row className="checkout__trai-rectangle ml-3"></Row>
          <Col
            className="mt-3 checkout__trai-thanhtoan d-flex justify-content-between "
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
          className="checkout__phai"
          xl={{ span: 16, offset: 0 }}
          sm={{ span: 16, offset: 0 }}
        >
          <>
            <h5>bạn đã có tài khoản Một ?</h5>
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
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Emnail của bạn !',
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
                    message: 'Vui lòng nhập mật khẩu !',
                  },
                ]}
                name="phone"
              >
                <DivInput />
              </Form.Item>
              <Form.Item
                wrapperCol={{ offset: 0, span: 16 }}
                className="checkout__phai-dangnhap"
              >
                <div className="aaaa">
                  <Button htmlType="submit">
                    <Link to="/checkoutstep1">đăng nhập</Link>
                  </Button>
                  <a href="/">tôi quên mật khẩu rồi !!!</a>
                </div>
              </Form.Item>

              <Form.Item
                wrapperCol={{ offset: 0, span: 16 }}
                className="checkout__phai-vanglai"
              >
                <h5>mua hàng vãng lai</h5>
                <p>
                  tiếp tục với tư cách là khách vãng lai, hoặc đăng ký Một tài
                  khoản để tra cứu đơn hàng nhanh gọn và nhận mọi khuyến mãi mới
                  nhất
                </p>
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
                name="name"
              >
                <DivInput />
              </Form.Item>
              <Form.Item
                wrapperCol={{ offset: 0, span: 16 }}
                className="checkout__phai-button"
              >
                <button>mua hàng vãng lai</button>
                <button>đăng ký</button>
              </Form.Item>
            </Form>
          </>
        </Col>
      </Row>
    </DivCheckout>
  )
}

export default Checkout
