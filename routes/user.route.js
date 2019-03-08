const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/create', user_controller.user_create_page);

router.post('/create', user_controller.user_create);

router.get('/list', user_controller.list_users);

router.get('/login', user_controller.login_page);

router.get('/update/:id', user_controller.user_update_page);

router.post('/update/:id', user_controller.user_update);

//router.post('/delete/:id', user_controller.user_delete);

module.exports = router;
