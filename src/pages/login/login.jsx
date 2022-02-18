import React, { Component } from 'react'
import { DivLogin } from './index.style'
import { EyeOutlined } from '@ant-design/icons'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
    }
  }
  handleOnchangeusername = (event) => {
    this.setState({
      username: event.target.value,
    })
  }
  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleLogin = () => {
    console.log(
      'username: ',
      this.state.username,
      'password: ',
      this.state.password
    )
    console.log('all state', this.state)
  }
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    })
  }
  render() {
    return (
      <DivLogin>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tài khoản"
                      value={this.state.username}
                      onChange={(event) => this.handleOnchangeusername(event)}
                    ></input>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>

                    <div className="custom-input-password">
                      <input
                        type={this.state.isShowPassword ? 'text' : 'password'}
                        className="form-control"
                        placeholder="mật khẩu"
                        onChange={(event) => {
                          this.handleOnchangePassword(event)
                        }}
                      />
                      <span
                        onClick={() => {
                          this.handleShowHidePassword()
                        }}
                      >
                        {/* className=
                        {this.state.isShowPassword ? (
                          <EyeOutlined />
                        ) : (
                          <EyeInvisibleOutlined />
                        )} */}
                        <i>
                          <EyeOutlined />
                        </i>
                      </span>
                    </div>
                  </div>
                  {/* <div className="row align-items-center remember">
                    <input type="checkbox"></input>Remember Me
                  </div> */}
                  <div className="form-group">
                    <button
                      className="btn float-right login_btn"
                      onClick={() => {
                        this.handleLogin()
                      }}
                    >
                      đăng nhập
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  bạn chưa có tài khoản Một?<a href="/">đăng kí nhé</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="/">bạn đã quên mật khẩu ?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DivLogin>
    )
  }
}
export default Login
