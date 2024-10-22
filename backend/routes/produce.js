const express = require('express');
const Produce = require('../controllers/produce');
const router = express.Router()

router.post('/create-produce', Produce.createProduce);
router.get('/farm-produce/:id', Produce.getProduceByFarmId);

module.exports = router;
