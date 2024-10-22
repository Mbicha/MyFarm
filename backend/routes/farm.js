const express = require('express');
const router = express.Router();
const Farm = require('../controllers/farm');

router.post('/create-farm', Farm.createFarm);
router.get('/farms/:id', Farm.getFarmsById);

module.exports = router;
