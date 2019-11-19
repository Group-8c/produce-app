import React from 'react';
import { Button } from 'react-bootstrap'
import './Home.css';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="App">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Featured Items</h1>
                </div>
            </header>
            <Carousel />
             <h3>To search all our items go to our   <Button
                variant="outline-success"
                size="lg"><Link to="/Produce">Produce</Link><span class="sr-only">(current)</span></Button>    page.</h3>     
        </div>
    );
}

export default Home;
