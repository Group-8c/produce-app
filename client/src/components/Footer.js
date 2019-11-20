import React from 'react';
import address from './images/address_ic.png'
import mail from './images/mail_ic.png'
import phone from './images/phone_ic.png'
import fb from './images/fb_logo.png'

function Footer() {
    return (
        <div id="Contact">
            <div className="masthead-followup row m-0">
                <div className="col-md-4 p-md-4">
                    <h5><img src={address} width="6%"/> Address</h5>
                    <p>600 Halpin Road<br />
                        Monticello, Florida</p>
                </div>

                <div className="col-md-4 p-md-4">
                    <h4>Contact</h4>
                    <p><img src={phone} width="5%"/> Phone: (850) 251-0386<br />
                    <img src={mail} width="5%"/> E-mail: seedtimebiz@gmail.com</p>
                </div>

                <div className="col-md-4 p-md-4">
                    <h4>Visit us on <a href="https://www.facebook.com/SeedTimeBiz/"><img src={fb} width="7%"/></a> to find more 
                    information</h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;