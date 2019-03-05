const express = require('express');
const router = express.Router();

const member_controller = require('../controllers/member.controller');

router.get('/test', member_controller.test);

module.exports = router;