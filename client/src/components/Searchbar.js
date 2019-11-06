import React, { Component } from 'react'
import { Form, FormControl } from 'react-bootstrap'

class Searchbar extends Component {
    // filterUpdate() {
    //     const val = this.myValue.value
    //     this.props.filterUpdate(val)
    // }

    render() {
        return (
            <Form inline class="form-navbar">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        )
    }
}

export default Searchbar;