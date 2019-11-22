import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addItem } from '../../actions/itemActions';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import GetUsers from './GetUsers';


export class Admin extends Component {

    state = {
        name: '',
        price: ''
    }
    render() {
        return (
           <div className="" >
               <div>
                    <AddItem />
                </div>
                <div style={{margin:"-330px 50px", maxWidth: "100px"}}>
                    <GetUsers />
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps)(Admin);
