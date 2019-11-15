import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import farm from '../../components/images/farm.jpg'

function About() {
    return (
        <div className="App">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>About Our Company</h1>
                </div>
            </header>
            <h2>Who we are</h2>
            <p>We are a group of farmers working to bring quality produce to you...</p>
        </div>
    );
}

export default About;


