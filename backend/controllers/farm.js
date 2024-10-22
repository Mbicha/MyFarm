const Farm = require('../models/farm')
const mongoose = require('mongoose')

exports.createFarm = async (req, res) => {
    try {        
        const newFarm = await Farm.create(req.body);
    
        res.status(201).json({
            status: 'success',
            data: {
                farm: newFarm
            }
        });
    } catch (error) {        
        res.status(500).json({
            status: 'error',
            message: 'Failed to create Farm',
            error: error.message
        })
    }
}

exports.getFarmsById = async (req, res) => {
    try {
        const farms = await Farm.aggregate([
            {
                $match: {
                    user_id: new mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $lookup: {
                    from: 'subscriptionplans',
                    localField: 'user_id',
                    foreignField: 'user_id',
                    as: 'subscription'
                }
            },
            {
                $project: {
                    full_name: {
                        $concat: [
                            {$arrayElemAt: ["$user.FirstName", 0]},
                            " ",
                            {$arrayElemAt: ["$user.LastName", 0]}
                        ]
                    },
                    farm_name: 1,
                    specific_farming_type: 1,
                    plan_type: {$arrayElemAt: ["$subscription.plan_type", 0]}
                }
            }
        ])

        if(!farms.length === 0){
            res.status(404).send({
                status: 'fail',
                message: 'Farm not found'
            })
        }

        res.status(200).send({
            status: 'success',
            farms
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: error.error
        })
    }
}
