import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addItem } from '../../actions/itemActions';
import { connect } from 'react-redux';


export class Admin extends Component {

    state = {
        name: '',
        price: '',
        image: null
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, price, image } = this.state;

        const item = {
            name,
            price,
            image
        }

        //attempt to login
        this.props.addItem(item);
        
    }

    fileHandler = e => {
        this.setState({ image: e.target.files[0] })
    }

    render() {
        return (
            <div style={{ margin: "100px auto", maxWidth: "250px" }}>
                <h3 style={{margin: "0px 50px"}}>Add an item</h3>
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

                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Enter item description"
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

                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            id="image"
                            onChange={this.fileHandler}
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