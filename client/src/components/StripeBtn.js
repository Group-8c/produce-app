import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";const stripeBtn = () => {
  const publishableKey = "pk_test_ZU3mlTy0q00DATc9EyF9A8jX";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };  axios
      .post("http://localhost:3000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };  return (
    <StripeCheckout
      label="Pay Now" //Component button text
      name="Seedtime Harvest Farms" //Modal Header
      description="Enjoy your farm fresh goods!"
      panelLabel="Purchase Now" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};export default stripeBtn;
