import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Sidebar, Ref } from 'semantic-ui-react'
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import Navbar from './components/Navbar'
import My_Cart from "./views/My_Cart/My_Cart"
import Register from './auth/Register';
import Admin from './views/Admin/Admin'
import SignIn from './auth/SignIn';
import Footer from './components/Footer'
import ProducePage from './views/Produce/Produce'
import ProtectedRoute from './ProtectedRoute'
import uuid from 'uuid'
import Profile from './views/Profile/Profile'
import data from './views/data/data'
import { connect } from 'react-redux';
import CartItems from './components/CartItems'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      cartVisible: false,
      userCart: [],
      total: 0
     }
  }
  addToCart = (item) => {
    this.setState({ userCart: [...this.state.userCart, {
      name: item.name,
      price: item.price,
      img: item.img,
      id: uuid()
    }]})
    this.setState({ total: Math.round((this.state.total + item.price) * 100) / 100 })
  }
  removeFromCart = (delItem) => {
    this.setState({ 
      userCart: [...this.state.userCart.filter(item => item.id !== delItem.id)],
      total: Math.round((this.state.total - delItem.price) * 100) / 100
    });
  }
  

  toggleCart() {
    this.setState({cartVisible: !this.state.cartVisible})
  }
  render() {

    const { isAuthenticated, isAdmin } = this.props.auth;
    console.log(this.state.userCart)

    return (
      <div>
          <Navbar
            toggleCart={this.toggleCart.bind(this)}
            cartVisible={this.state.cartVisible}
          />

          {//react-router links to static pages
           // the route "/Admin" is protected by a prop that checks if the current user
           // that is logged in is an admin
          }
          <Sidebar.Pushable as={Ref}>
          <Sidebar.Pusher>
            <CartItems
              cartVisible={this.state.cartVisible}
              userCart={this.state.userCart}
              removeFromCart={this.removeFromCart}
              total={this.state.total}
            />
            <Ref>
              <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/My_Cart" render={(routeProps) => (<My_Cart {...routeProps} userCart={this.state.userCart} total={this.state.total}/>)} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Signin" component={SignIn} />
                <Route exact path="/Produce" render={(routeProps) => (<ProducePage {...routeProps} addToCart={this.addToCart} total={this.state.total}/>)} />
                <ProtectedRoute isAdmin={isAdmin} path="/Admin" component={Admin} />
                <Route exact path="/">
                  <Redirect to="/Home" />
                </Route>
                <Route component={NotFound}/>
              </Switch>
            </Ref>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(App)
