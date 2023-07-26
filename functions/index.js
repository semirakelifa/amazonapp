

const functions = require("firebase-functions")
const express= require("express")
const cors = require('cors');

const stripe = require("stripe")(
  'sk_test_51NIzC0EF8HqAkUiVtdA30rXo2q0hwZpFyf2T6VuZAs6mNbdkqVEZSXhxIsQAB2vbqNYfyjlgMX6nSjwV6PIT6XmP00netDm8ku'
);
// App config
const app = express();

// middlewares

app.use(cors({origin:true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send('Hello world'));


app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

//   console.log('payment request reacievd for this amount' >>> total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// (http://127.0.0.1:5001/react-clone-51612/us-central1/api).
// http://127.0.0.1:5001/react-clone-51612/us-central1/api



