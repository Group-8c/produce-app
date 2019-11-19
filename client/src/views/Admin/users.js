/*
    Admin route /users
    Gets all users
*/


import React, { Component } from 'react'
import axios from 'axios';

export class users extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('/api/auth/users')
        .then(res => {
            const persons = res.data
            this.setState({ persons })
        })
    }
    render() {
        return (
            <div style={{ marginTop: "200px" }}>
                <ul>
                    {this.state.persons.map(person => <li>{person.email}</li>)}
                </ul>
            </div>
        )
    }
}



export default users
