import React from 'react'
import ProduceItem from './ProduceItem'

function Produce() {
    return (
        <div className="App">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Produce</h1>
                </div>
            </header>
            <ProduceItem />
        </div>
    );
}

export default Produce;