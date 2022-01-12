import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Shop from './pages/shop/shop.component'
import Shop_Homepage from './components/shop/shop'
import Header from './components/header_black/headerBlack'
import Footer from './components/footer/footer'
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import 'antd/dist/antd.css'
import Bonsp from './components/shop-3sp/3sp'
import './App.css'
import TrietLy from './components/content_trietly/contentTrietly'
import Product from './pages/product-detail/product'
import CardMenu from './components/card-menu/card-menu'
import Carousel from './components/carousel-feedback/feedback'
import BannerCauchuyen from './pages/cauchuyen/cauchuyen'
import Locations from './pages/locations/locations'
import Thacmac from './pages/thacmac/thacmac'
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const isBackgroundRed = true
    return (
      <div className="app">
        <div style={{ backgroundColor: isBackgroundRed ? 'red' : 'blue' }}>
          <Header />
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Shop} />

            <Route exact path="/footer" component={Footer} />
            <Route exact path="/trietly" component={TrietLy} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/card" component={CardMenu} />
            <Route exact path="/4sp" component={Bonsp} />
            <Route exact path="/Carousel" component={Carousel} />
            <Route exact path="/cauchuyen" component={BannerCauchuyen} />
            <Route exact path="/noiban" component={Locations} />
            <Route exact path="/thacmac" component={Thacmac} />

            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <></>
              }
            />
          </Switch>
        </div>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
