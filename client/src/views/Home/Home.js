import React from 'react';
import { Button, Row, Card, CardDeck } from 'react-bootstrap'
import { Container } from 'semantic-ui-react'
import './Home.css';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import data from '../data/data'
import About from '../About/About'

class Home extends React.Component {
    render() {
        const apples = data.filter(item => {
            return item.name==='Apples'
        }).map(item => {
            return (
            <CardDeck>
                <Card border="light">
                    <Card.Img variant="top" src={ item.img } />
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Body>{item.description}</Card.Body>
                    {/* TODO: Add to cart button */}
                </Card>
            </CardDeck>)
        })
        return (
            <div className="App">
                <header className="home-head hero-image">
                    <div className="hero-text">
                        <h1>Seed Time Harvest Farms</h1>
                    </div>
                </header>
                <br />
                <Container>
                <h3>New Arrivals</h3>
                <Carousel
                    data={data}
                />
                <h3>Featured Apples</h3>
                <Row>
                    {apples}
                </Row>
                <h3>To search all our items go to our   <Link to="/Produce"><Button
                    variant="outline-success"
                    size="lg">Produce<span className="sr-only">(current)</span></Button></Link>    page.
                </h3>
                <br />
                </Container>
            </div>
        )
    };
}

export default Home;