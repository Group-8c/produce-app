import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text>
                                We will never share your email with anyone.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
               
                
            </div>
        )
    }
}

export default Register
