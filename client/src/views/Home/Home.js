import React from 'react';
import { Button } from 'react-bootstrap'
import './Home.css';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import data from '../data/data'

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="home-head hero-image">
                    <div className="hero-text">
                        <h1>Featured Items</h1>
                    </div>
                </header>
                <Carousel
                    data={data}
                />
                <h3>To search all our items go to our   <Link to="/Produce"><Button
                    variant="outline-success"
                    size="lg">Produce<span class="sr-only">(current)</span></Button></Link>    page.</h3>    
            </div>
        )
    };
}

export default Home;