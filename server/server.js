const express = require('./config/express.js');
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

//const cors = require("cors");
//const bodyParser = require("body-parser");
//const dotenv = require("dotenv");
//dotenv.config() 

//const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());
//const configureRoutes = require("./routes");
//configureRoutes(app);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
/*
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeChargeCallback = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  };
  const paymentApi = app => {
    app.get("/", (req, res) => {
      res.send({
        message: "Hello Stripe checkout server!",
        timestamp: new Date().toISOString()
      });
    });
    app.post("/", (req, res) => {
      const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd"
      };
      stripe.charges.create(body, stripeChargeCallback(res));
    });  
  return app;
  };
  module.exports = paymentApi;

  const paymentApi = require("./payment");const configureRoutes = app => {
    paymentApi(app);
  };
  module.exports = configureRoutes;
  */