import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addItem } from '../../actions/itemActions';
import { connect } from 'react-redux';


export class Admin extends Component {

    state = {
        name: '',
        price: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, price } = this.state;

        const item = {
            name,
            price
        }

        //attempt to login
        this.props.addItem(item);
        
    }


    render() {
        return (
            <div style={{ marginTop: "100px", marginLeft: "15px", maxWidth: "250px" }}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter item name"
                            onChange={this.onChange}
                        />

                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Enter item price"
                            onChange={this.onChange}
                        />
                    </Form.Group>
                    <Button type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(Admin);
