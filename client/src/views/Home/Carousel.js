import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

//Static data file
import featItems from './featItems';


class carousel extends Component {    
    render () {
        const featuredItems = featItems.map(item => {
            return (
                <Carousel.Item>
                    <img
                        src = {item.img}
                        width="20%"
                    />
                    <Carousel.Caption className="d-none d-md-block">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })

        return (
            <Carousel>
                {featuredItems}
            </Carousel>
        )
    }
}

export default carousel