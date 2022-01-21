const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JNa7BSEp71BuU6xZ0z1nCKtbkNrWN7X74N0aMDh3vDT9pYBDHnNJ8Ks9DZYjmL1Q9ahKRAGv2B9ztyBINy8jN3C00WPUcdj20"
);

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post('/payments/create',async (request,response)=>{
    
    const total=request.query.total;
    console.log('Request Recieved',total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });


    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
    // response.status(404).send({
    //     console.log("Error in Api");
    // });
});
//Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
