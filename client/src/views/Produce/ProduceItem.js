import React, { Component } from 'react';
import { Card, CardDeck, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap'

function ProduceItem({produceItems, filterText, isAdmin, adminDelete, addToCart}) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const shopItems = produceItems
     .filter(item => {
        return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    }) 
    .map(item => {
        return (
            <CardDeck>
                <Card border="light">
                
                    <Card.Img variant="top" src={ item.img }/>
                    
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Body>{item.description}</Card.Body>
                    
                    {/* Modal for view details */}
                    
                    <Card.Footer align="right">
                            <OverlayTrigger
                                trigger="click"
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                    <Popover.Title as="h3">{item.name}</Popover.Title>
                                    <Popover.Content>
                                        <strong>Item details: </strong> {item.description} <br />
                                        <strong>Provider: </strong>
                                    </Popover.Content>
                                    </Popover>
                                }
                            >
                                <Button variant="btn btn-outline-info" size="sm" onClick={handleShow}>Details</Button>
                            </OverlayTrigger>
                            
                            {isAdmin ?
                            <Button
                                className="remove-btn"
                                variant="danger"
                                size="sm"
                                onClick={adminDelete.bind(this, item.id)}
                            >Remove</Button> 
                            : <Button 
                                variant="success" 
                                size="sm"
                                onClick={addToCart.bind(this, item)}
                                >Add to cart</Button>
                            }
                            
                    </Card.Footer>
                    
                </Card>
            </CardDeck>
        )
    })
    
    return (
        <Row>
            {shopItems}
        </Row>
    );
    }


export default ProduceItem