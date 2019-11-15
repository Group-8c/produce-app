import React from 'react';
import market from '../../components/images/market.jpg'
import farm from '../../components/images/farm.jpg'
import produce from '../../components/images/agriculture-beetroot-beets-533360.jpg'

function Services() {
    return (
        <div className="App">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Services</h1>
                </div>
            </header>

            <div className="masthead-followup row m-0 border border-white">
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ market } width="100%" />
                    <h3>Service 1</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ farm } width="100%" />
                    <h3>Service 2</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <img src={ produce } width="100%" />
                    <h3>Service 3</h3>
                    <p>
                        Description
                    </p>
                    <hr className="half-rule"/>
                </div>
            </div>
        </div>
    );
}

export default Services;