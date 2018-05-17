const express = require('express');
const router = express.Router();
const controller = require('../controllers/paperDataController');

router.route('/')
.post(controller.processRequest);

module.exports = router;
