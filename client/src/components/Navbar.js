import React, { Component, Fragment } from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo1 from './images/logo1.png'
import '../views/style/style.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Register from '../auth/Register';
import SignIn from '../auth/SignIn';
import Logout from '../auth/Logout';

class AppNavbar extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    }


    render() {

        const { isAuthenticated, user } = this.props.auth

        const authLinks = (
            <Fragment>
                <Nav.Link>
                    <Logout />
                </Nav.Link>
            </Fragment>

        )

        const guestLinks = (
            <Fragment>
                <Link className="topnav-link nav-link" to='/Signin'>Sign in <span className="sr-only">(current)</span></Link>
                <Link className="topnav-link nav-link" to='/Register'>Register <span className="sr-only">(current)</span></Link>
            </Fragment>
        )

        return (
            <div>
            <Navbar className="fixed-top" bg="dark navbar-dark" expand="lg">
                <Navbar.Brand><Link id="logo-link" to="/"><img className="topnav-logo" width="65" alt="logo" src={logo1} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto order-2">
                        {//if the user is logged in, show authLinks, else show guestLinks
                        }
                        
                        { isAuthenticated ? authLinks : guestLinks}

                    </Nav>
                    <Nav className="navbar-nav mr-auto order-1">
                        <Link className="topnav-link nav-link" to='/Home'>Featured <span className="sr-only">(current)</span></Link>
                        <Link className="topnav-link nav-link" to='/Produce'>Shop <span className="sr-only">(current)</span></Link>
                        <Link className="topnav-link nav-link" to='/About'>About <span className="sr-only">(current)</span></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)
