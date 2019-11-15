import React, { Component } from 'react'
import { Form, FormControl } from 'react-bootstrap'

class Searchbar extends Component {
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <Form inline class="form-navbar">
                <FormControl
                    size="lg"
                    type="text"
                    ref={ (value) => {this.myValue = value}}
                    placeholder="Type to filter..."
                    onChange={this.filterUpdate.bind(this)}
                />
            </Form>
        )
    }
}

export default Searchbar;