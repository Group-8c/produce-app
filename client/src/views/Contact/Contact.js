import React from 'react'
import { Form, Button, Card, Row } from 'react-bootstrap';

function Contact() {
    return (
        <div className="App" width="100%">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Contact Us</h1>
                </div>
            </header>
            <Card className="card-bg">
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="password" placeholder="Phone" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" cols="4" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contact;
