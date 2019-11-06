import React from 'react';
//import logo from '../../assets/logo.svg';
//import { Jumbotron } from 'react-bootstrap'
//import orchard from '../../components/images/agriculture-beetroot-beets-533360.jpg'
//import { Image } from 'react-bootstrap'
//import Services from '../Services/Services'
//import About from '../About/About'
//import Contact from '../../Footer'
import './Home.css';
import Carousel from './Carousel';

function Home() {
    return (
        <div className="App">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Featured Items</h1>
                </div>
            </header>
            <Carousel />          
        </div>
    );
}

export default Home;
