const Produce = require('../models/produce');
const mongoose = require('mongoose');

exports.createProduce = async (req, res) => {
    try {
        const newProduce = await Produce.create(req.body)

        res.status(200).send({
            status: 'success',
            message: 'Successfully Created!',
            data: {
                newProduce
            }
        })
    } catch (error) {
        res.status(401).send({
            status: 'fail',
            message: error.error
        })
    }
}

exports.getProduceByFarmId = async (req, res) => {
    try {
        const farmProduce = await Produce.aggregate([
            {
                $match: {
                    farm_id: new mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
                $project: {
                    harvest: "$harvest",
                    source: "$source",
                    description: "$description",
                    price: "$price",
                    produce_photo: "$produce_photo",
                    unit_of_measure: "$unit_of_measure"
                }
            }
        ]);

        if(farmProduce.length === 0) {
            res.status(404).send({
                status: 'fail',
                message: 'No Document or ID'
            });
        }

        res.status(200).send({
            status: "success",
            farmProduce
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: error
        })
    }
}
