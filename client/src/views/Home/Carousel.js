import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

export default ({data}) => {
    const featuredItems = data.map(item => {
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