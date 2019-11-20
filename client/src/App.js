import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Services from "./views/Services/Services"
import Contact from "./views/Contact/Contact"
import NotFound from "./views/NotFound"
import Navbar from './components/Navbar'
import My_Cart from "./views/My_Cart/My_Cart"
import Register from './auth/Register';
import SignIn from './auth/SignIn';
import Footer from './components/Footer'
import ProducePage from './views/Produce/Produce'


import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (

    <Provider store={store}>
    <div>
      <Navbar />

      {//react-router links to static pages
      }
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/My_Cart" component={My_Cart} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/Produce" component={ProducePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
    <Footer />
    </Provider>
  );
}

export default App;
