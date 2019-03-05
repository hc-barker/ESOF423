const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/create', user_controller.user_create_page);

module.exports = router;
