import React from 'react';
import logo from '../../assets/logo.svg';
import { Jumbotron } from 'react-bootstrap'
import orchard from '../../components/images/agriculture-beetroot-beets-533360.jpg'
import { Image } from 'react-bootstrap'
import Services from '../Services/Services'
import About from '../About/About'
import Contact from '../../Footer'
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header hero-image">
                    <div className="hero-text">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </header>
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;
