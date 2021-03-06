import React, { Component } from 'react';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

// Component for registering a new account
export class Register extends Component {

    state = {
        firstname: '',
        lastName: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }
    
    //If the register is a success redirect the user home or show errors if not a success
    componentDidUpdate(previousProps) {
        const { error, isAuthenticated } = this.props;
        if( error !== previousProps.error) {
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            }else {
                this.setState({ msg: null });
            }
        }
        
        if(isAuthenticated)
            this.props.history.push('/');
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // Upon form submission, register a new user
    onSubmit = e => {
        e.preventDefault();

        const {firstName, lastName, email, password } = this.state;

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        this.props.register(newUser);
    }

    // Render the register button and show proper error message, if any.
    render() {
        return (
            <div className="App">
                <div className="not-found hero-image"/>
                <Row className="hero-text">
                    <Card className="card-bg" style={{ width: '30rem' }}>
                        <Card.Header align="center">Register</Card.Header>
                        <Card.Body>
                            {
                                this.state.msg ? (
                                    <Alert variant="danger">{ this.state.msg }</Alert>
                                ) : null
                            }

                            <Form onSubmit={this.onSubmit}>
                                <Form.Row><Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type = "text" 
                                        name = "firstName"
                                        id = "firstName"
                                        placeholder="First Name"
                                        onChange={this.onChange}
                                    /></Form.Group>
                                    <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        type = "text" 
                                        name = "lastName"
                                        id = "lastName"
                                        placeholder="Last Name"
                                        onChange={this.onChange}
                                    />
                                </Form.Group></Form.Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type = "email" 
                                        name = "email"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type = "password"
                                        name = "password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(Register);
