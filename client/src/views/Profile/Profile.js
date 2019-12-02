import React, {Component} from 'react';

import { connect } from 'react-redux';
import ppic from '../../components/images/default-profile-pic.jpg'

class Profile extends Component {
    
    render() {
        const {isAuthenticated, user} = this.props.auth;
        
        return (
            <div>
                <header className="home-head hero-image">
                    <div className="hero-text">
                        <h1 className="header">Account Profile</h1>   
                    
                    <div className="profile-container">
                        <img className="profile" src={ppic}></img>
                    </div>

                    </div>
                </header>

                <div className="ui-grid">
                    <form className="ui-form">
                        <div className="field">
                            <label className="label">First Name</label>
                            <br/>
                            <input className="input-container" type="text" defaultValue={isAuthenticated ? user.firstName : ""}/>
                        </div>
                        <div className="field">
                            <label className="label">Last Name</label>
                            <br/>
                            <input className="input-container" type="text" defaultValue={isAuthenticated ? user.lastName : ""}/>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <br/>
                            <input className="input-container" type="text" defaultValue={isAuthenticated ? user.email : ""}/>
                        </div>
                        <div className="field">
                            <label className="label">Bio</label>
                            <br/>
                            <textarea className="Bio" placeholder="Bio"/>
                        </div>                    
                        
                        <button className="update-button" type="submit">Update</button>
                        <br/>
                    </form>    
                </div>            


            </div>
        );
    }
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Profile);