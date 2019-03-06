const express = require('express');
const router = express.Router();

const activity_controller = require('../controllers/activity.controller');

router.get('/create', activity_controller.activity_create_page);

router.post('/create', activity_controller.activity_create);

router.get('/list', activity_controller.activity_list);

module.exports = router;
