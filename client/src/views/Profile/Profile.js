import React, {Component} from 'react';
import ppic from '../../components/images/default-profile-pic.jpg'

class Profile extends Component {
    render() {
        
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
                            <label>First Name</label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="field">
                            <label>Bio</label>
                            <textarea rows="4" cols="40" placeholder="Bio"/>
                        </div>                    
                        

                    </form>    
                </div>            


            </div>
        );
    }
};

export default Profile;