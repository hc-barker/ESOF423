const express = require('express');
const router = express.Router();

const util_controller = require('../controllers/util.controller');

router.get('/', util_controller.index_page);

router.get('/test', util_controller.test_page);

router.get('/about', util_controller.about_page);

module.exports = router;
