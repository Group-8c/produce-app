import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
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
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props.auth; 

    return (
      <div>
        <div>
          <Navbar />

          {//react-router links to static pages
           // the route "/Admin" is protected by a prop that checks if the current user
           // that is logged in is an admin
          }
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/My_Cart" component={My_Cart} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Signin" component={SignIn} />
            <Route exact path="/Produce" component={ProducePage} />
            <ProtectedRoute isAdmin={isAdmin} path="/Admin" component={Admin} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(App)
