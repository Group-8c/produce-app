import React from 'react';
import { Card, CardGroup } from 'react-bootstrap'

export default ({ filterText, data }) => {
    const produceItems = data
    .filter(item => {
        return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map(item => {
        return (
            <Card border="light">
                <Card.Img variant="top" src={ item.img } width="40%" />
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>{item.description}</Card.Body>
                {/* TODO: Add to cart button */}
            </Card>
        )
    })

    return (
        <CardGroup>
            {produceItems}
        </CardGroup>
    );
}