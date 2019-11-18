import React from 'react';
import { Card, CardDeck, Row } from 'react-bootstrap'

export default ({data, filterText}) => {
    const produceItems = data
    .filter(item => {
        return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map(item => {
        return (
            <CardDeck>
                <Card border="light">
                    <Card.Img variant="top" src={ item.img } />
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Body>{item.description}</Card.Body>
                    {/* TODO: Add to cart button */}
                </Card>
            </CardDeck>
        )
    })

    return (
        <Row>
            {produceItems}
        </Row>
    );
}