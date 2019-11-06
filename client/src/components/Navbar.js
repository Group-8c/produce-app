import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import logo1 from './images/logo1.png'
import '../views/style/style.css'

export default () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand><Link id="logo-link" to="/"><img className="topnav-logo" width="65" alt="logo" src={logo1} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav ml-auto order-2">
                    <Searchbar />
                    <Link className="topnav-link" class="nav-link" to='/Signin'>Sign in <span class="sr-only">(current)</span></Link>
                    <Link className="topnav-link" class="nav-link" to='/Register'>Register <span class="sr-only">(current)</span></Link>
                </Nav>
                <Nav className="navbar-nav mr-auto order-1">
                    <Link className="topnav-link" class="nav-link" to='/Home'>Home <span class="sr-only">(current)</span></Link>
                    <Link className="topnav-link" class="nav-link" to='/About'>About <span class="sr-only">(current)</span></Link>
                    <Link className="topnav-link" class="nav-link" to='/Services'>Services <span class="sr-only">(current)</span></Link>
                    <Link className="topnav-link" class="nav-link" to='/Contact'>Contact <span class="sr-only">(current)</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}