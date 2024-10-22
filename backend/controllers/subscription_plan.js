const SubscriptionPlan = require('../models/subscription_plan')

exports.createSubscriptionPlan = async (req, res) => {
    try {
        const newSubscriptionPlan = await SubscriptionPlan.create(req.body)

        res.status(200).send({
            status: "success",
            data: {
                newSubscriptionPlan
            }
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: error.error
        })
    }
}


