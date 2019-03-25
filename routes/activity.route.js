const express = require('express');
const router = express.Router();

const activity_controller = require('../controllers/activity.controller');

router.get('/create', activity_controller.activity_create_page);

router.post('/create', activity_controller.activity_create);

router.get('/list', activity_controller.activity_list);

router.get('/recommend', activity_controller.activity_recommend_page);

router.get('/update/:id', activity_controller.activity_update_page);

router.post('/update/:id', activity_controller.activity_update);

router.post('/delete/:id', activity_controller.activity_delete);

module.exports = router;
