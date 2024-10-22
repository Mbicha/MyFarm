const express = require('express');
const router = express.Router();
const SubscriptionPlan = require('../controllers/subscription_plan');

router.post('/new-plan', SubscriptionPlan.createSubscriptionPlan);

module.exports = router;
