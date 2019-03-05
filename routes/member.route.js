const express = require('express');
const router = express.Router();

const member_controller = require('../controllers/member.controller');

router.get('/test', member_controller.test);

router.get('/create', member_controller.member_create_page);

router.post('/create', member_controller.member_create);

router.get('/list', member_controller.list_members);

module.exports = router;
