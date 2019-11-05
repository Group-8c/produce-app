import React from 'react'
import { Container, Card } from 'react-bootstrap'



const ItemCard = ({featItem}) => {
    const { name, img, description } = featItem;

    /*
        This returns a react-bootstrap container that 

    */
    return (
        <div>
            <Container 
                style={{ 
                    display: 'flex' ,
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                <Card style={{width:'18rem'}}>
                    <Card.Img 
                        variant="top" 
                        src={img} 
                        style={{
                            width: '100px', 
                            height: '100px', 
                            marginLeft: 'auto', 
                            marginRight: 'auto'
                        }}
                    />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ItemCard;

