/*
    Admin route /users
    Gets all users
*/


import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

export class users extends Component {

    state = {
        persons: [],
        shouldRender: false
    }

    componentDidMount() {
        axios.get('/api/auth/users')
        .then(res => {
            const persons = res.data
            this.setState({ persons })
        })
    }

    handleClick = e => {
        this.setState({ shouldRender: !this.state.shouldRender })
    }

    render() {
        if(this.state.shouldRender) {
            return (
                <div>
                <Button onClick={this.handleClick}>
                    Hide Users
                </Button>
                <div>
                    <h4>User List</h4>
                    <ul>
                        {this.state.persons.map(person => <li>{person.email}</li>)}
                    </ul>
                </div>
                </div>
            )
        }
        return (
            <div>
                <Button onClick={this.handleClick}>
                    Get Users
                </Button>
            </div>
        )
    }
}



export default users
