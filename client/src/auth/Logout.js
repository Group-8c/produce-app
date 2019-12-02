import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';


export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <Link className="navbar-dark navbar-text" to='/Home' onClick={this.props.logout}>
                    Logout
                </Link>
            </Fragment>
        )
    }
}

export default connect(null, { logout })(Logout)
