import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo1 from './images/logo1.png'
import '../views/style/style.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from '../auth/Logout';
import Admin from '../views/Admin/Admin'

class AppNavbar extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    }


    render() {

        const { isAuthenticated, isAdmin, user } = this.props.auth


         //Links an admin sees
         const adminLinks = (
            <Fragment>

                <Nav.Link>
                    
                    <Link to="/Admin" className="topnav-link" class="nav-link">Admin <span class="sr-only">(current)</span>
                        
                    </Link>
                </Nav.Link>
                <Nav.Item>
                    <span className="navbar-text" style={{marginTop: "8px"}}>
                        <strong>{ user ? `Welcome admin` : ''}</strong>
                    </span>
                </Nav.Item>
                <Nav.Link>
                    <Logout />
                </Nav.Link>
            </Fragment>
        )



        //Links a user sees
        const authLinks = (
            <Fragment>
                <Nav.Item>
                    <span className="navbar-text" style={{marginTop: "8px"}}>
                        <strong>{ user ? `Welcome ${user.email}` : ''}</strong>
                    </span>
                </Nav.Item>
                <Nav.Link>
                    <Logout />
                </Nav.Link>
            </Fragment>
        )

        //Links a guest sees
        const guestLinks = (
            <Fragment>
                <Link className="topnav-link" class="nav-link" to='/Signin'>Sign in <span class="sr-only">(current)</span></Link>
                <Link className="topnav-link" class="nav-link" to='/Register'>Register <span class="sr-only">(current)</span></Link>
            </Fragment>
        )

        return (
            <div>
            <Navbar className="fixed-top" bg="dark navbar-dark" expand="lg">
                <Navbar.Brand><Link id="logo-link" to="/"><img className="topnav-logo" width="65" alt="logo" src={logo1} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto order-2">

                        {//if the user is logged in, show admin links if the user
                        //is an admin, else show authLinks, else show guestLinks
                        }
                        { isAuthenticated ? isAdmin ? adminLinks : authLinks : guestLinks}

                    </Nav>
                    <Nav className="navbar-nav mr-auto order-1">
                        <Link className="topnav-link" class="nav-link" to='/Home'>Home <span class="sr-only">(current)</span></Link>
                        <Link className="topnav-link" class="nav-link" to='/About'>About <span class="sr-only">(current)</span></Link>
                        <Link className="topnav-link" class="nav-link" to='/Services'>Services <span class="sr-only">(current)</span></Link>
                        <Link className="topnav-link" class="nav-link" to='/Contact'>Contact <span class="sr-only">(current)</span></Link>
                        
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

