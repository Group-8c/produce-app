import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Form, Button, Card, Row, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

export class SignIn extends Component {

    state = {
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidUpdate(previousProps) {
        const { error, isAuthenticated } = this.props;
        if(error != previousProps.error) {
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

       
        if(isAuthenticated)
            this.props.history.push('/');

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { isAuthenticated, email, password } = this.state;

        const user = {
            email,
            password
        }

        this.props.login(user)
        
    }

    render() {
        return (
            <div className="App">
                <div className="not-found hero-image"/>
                <Row className="hero-text">
                    <Card className="card-bg" style={{ width: '30rem' }}>
                        <Card.Header align="center">Welcome</Card.Header>
                        <Card.Body>

                            {
                                this.state.msg ? (
                                    <Alert variant="danger">{ this.state.msg }</Alert>
                                ) : null
                            }

                            <Form onSubmit={this.onSubmit} history={this.props.history}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter email" 
                                        onChange={this.onChange}
                                    />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                   


                                
                                    Log in
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

export default connect(mapStateToProps, { login, clearErrors })(SignIn)
