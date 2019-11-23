import React from 'react';
import PaypalButton from '../../../src/components/PaypalButton';
import { Container } from 'semantic-ui-react'

function My_Cart() {
    return (
        <div id="My_Cart">
            <header className="home-head hero-image">
                <div className="hero-text">
                    <h1>Checkout</h1>
                </div>
            </header>
            <br />
            <Container>
            <div className="masthead-followup row m-0 border border-white">
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <h5>My Cart</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                    <h5>Item 2</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                    <h5>Item 3</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                </div>
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <h5>Item 1</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <h5>Item 2</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <h5>Item 3</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <hr className="half-rule"/>
                    <p>Subtotal:    </p>
                    <p>Tax:         </p>
                    <p>Total:       </p>
                </div>
            </div>
            <PaypalButton/>
            </Container>
        </div>
    );
}

export default My_Cart;