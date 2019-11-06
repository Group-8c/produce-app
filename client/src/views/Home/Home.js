import React from 'react';
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
