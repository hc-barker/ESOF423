const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/create', user_controller.user_create_page);

router.post('/create', user_controller.user_create);

router.get('/list', user_controller.list_users);

module.exports = router;
