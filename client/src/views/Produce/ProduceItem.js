import React, { Component } from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap'

//Static data file
import featItems from '../Home/featItems';

class ProduceItem extends Component {    
    render () {
        const produceItems = featItems.map(item => {
            return (
                <Card border="light">
                    <Card.Img variant="top" src={ item.img } width="40%" />
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>{item.description}</Card.Body>
                </Card>
            )
        })

        return (
            <CardGroup>
                {produceItems}
            </CardGroup>
        )
    }
}

export default ProduceItem