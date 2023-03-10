const express = require('express');
const router = express.Router();
const {
  sendRazorpayKey,
  sendStripeKey,
  captureRazorpayPayment,
  captureStripePayment,
} = require('../controllers/paymentController');
const { isLoggedIn } = require('../middlewares/user');

router.route('/stripekey').get(isLoggedIn, sendStripeKey);
router.route('/razorpaykey').get(isLoggedIn, sendRazorpayKey);

router.route('/capturestripe').post(isLoggedIn, captureStripePayment);
router.route('/capturrazorpay').post(isLoggedIn, captureRazorpayPayment);

module.exports = router;
