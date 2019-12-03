import React, { Fragment } from 'react';
import StripeBtn from '../../../src/components/StripeBtn';
import { Container } from 'semantic-ui-react'

function My_Cart({ userCart, total }) {
    let tax = Math.round((total * 0.065) * 100) / 100

    const cart = userCart.map(item => {
        return(
            <Fragment>
                <h5>{item.name}</h5>
                <img src={item.img} alt={item.name} style={{maxHeight: "50px", maxWidth: "50px"}}></img>
                <p>Amount: {item.price}</p>
            </Fragment>
        )
    })

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
                {/* <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    <h5>My Cart</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                    <h5>Item 2</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                    <h5>Item 3</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <button>Add/Remove</button>
                </div> */}
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    {cart}
                    {/* <h5>Item 1</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <h5>Item 2</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <h5>Item 3</h5>
                    <p>Amount....Cost/unit.............Amount x Cost/unit </p>
                    <hr className="half-rule"/>
                    <p>Subtotal:    </p>
                    <p>Tax:         </p>
                    <p>Total:       </p> */}
                    <p>Subtotal:  {total}  </p>
                    <p>Tax:   {tax}      </p>
                    <p>Total:    {Math.round((total + tax) * 100) / 100}   </p>
                </div>
            </div>
            
          <StripeBtn />
            </Container>
        </div>
    );
}

export default My_Cart;