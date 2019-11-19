import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


export class Admin extends Component {
    render() {
        return (
            <div style={{ marginTop: "100px", marginLeft: "15px", maxWidth: "250px" }}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter item name"
                        />

                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            placeholder="Enter item price"
                        />
                    </Form.Group>
                    <Button>
                        Add Item
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Admin
