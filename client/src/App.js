import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Services from "./views/Services/Services"
import Contact from "./views/Contact/Contact"
import NotFound from "./views/NotFound"
import Navbar from './components/Navbar'
import Register from './auth/Register';
import users from './views/Admin/users';
import Admin from './views/Admin/Admin'
import SignIn from './auth/SignIn';
import Footer from './Footer'
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
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/Produce" component={ProducePage} />
        <Route exact path="/Admin" component={Admin}></Route>
        <Route exact path="/Admin/users" component={users}></Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
