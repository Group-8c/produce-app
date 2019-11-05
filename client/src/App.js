import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Services from "./views/Services/Services"
import Contact from "./views/Contact/Contact"
import NotFound from "./views/NotFound"
//import Header from "./components/Header/Header"
import Navbar from './components/Navbar'
import Register from './components/Register';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <div>
      <Navbar />

      {//react-router links to static pages
      }
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Register" component={Register} />
        <Route path="/Signin" component={SignIn} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
