var express = require('express');
var router = express.Router();
const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_RAyNxkRTMYYNm3',
  key_secret: '7dHtNnMW2nzFjgXGN3IHGdjM',
});

 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create/orderId', function(req, res, next) {
  
  var options = {
    amount: 14999 * 100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send(order);
  });
  
});

router.get('/api/payment/verify', function(req, res, next) {
  var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);

});
 

module.exports = router;
