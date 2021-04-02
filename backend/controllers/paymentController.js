const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Process stripe payments   =>   /api/v1/payment/process

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr", //we can change curency from here to change the usd to inr
    // name: "test",
    // address: {
    //   line1: "23 mountain vally new nashik",
    //   postal_code: "110092",
    //   city: "new nashik",
    //   state: "nashik",
    //   country: "india",
    // },
    metadata: { integration_check: "accept_a_payment" },
  });

  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
