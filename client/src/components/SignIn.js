import React, { Component } from 'react';
import { Form, Button, Card, Row } from 'react-bootstrap';
import './style.css'

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }


    render() {
        return (
            <div className="App">
                <div className="App-header hero-image"/>
                    <Row className="hero-text">
                        <Card className="card-bg">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        
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
                            </Card.Body>
                        </Card>
                    </Row>
            </div>
        )
    }
}




export default SignIn
