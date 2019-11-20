import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import farm from '../../components/images/farm.jpg'
import market from '../../components/images/market.jpg'
import produce from '../../components/images/agriculture-beetroot-beets-533360.jpg'

function About() {
    return (
        <div>
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>About Our Company</h1>
                </div>
            </header>
            <br />
            <div className="masthead-followup row m-0 border border-white">
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ farm } width="100%" />
                    <hr />
                    <h3>Who we are</h3>
                    <p>Seed Time Harvest Farms has been serving the North Florida area with fresh 
                        food delivery services in gathering produce from local farmers and vendors 
                        and bringing them to our customers.
                    </p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ produce } width="100%" />
                    <hr />
                    <h3>What we do</h3>
                    <p>Our goal is to connect local farmers and customers. We want farmers to 
                        have a way to sell their produce and for customers to have a way to 
                        purchase fresh and healthy produce. We give our customers the benefit of 
                        knowing where their food is coming from.
                    </p>
                </div>
                
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ market } width="100%" />
                    <hr />
                    <h3>What we Offer</h3>
                    <p>We offer great customer services to bring fresh food to your table and 
                        creative ways to use produce in new ways. We deliver all your fresh produce and grocery items to you fresh 
                        from local farmers and vendors.
                    </p>
                    <br />
                    <p>
                        Bi-weekly service.
                        Seasonal subscriptions available.</p>
                </div>

            </div>
        </div>    
    );
}

export default About;


