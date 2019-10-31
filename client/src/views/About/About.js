import React from 'react';
import { Jumbotron } from 'react-bootstrap'

function About() {
    return (
        <div id="About">
            <Jumbotron fluid>
                <div className="page-header">
                    <h1>About Us</h1>
                </div>
            </Jumbotron>
            <h2>Who we are</h2>
            <p>We are a group of farmers working to bring quality produce to you...</p>
        </div>
    );
}

export default About;


