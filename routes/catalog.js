const express = require('express');
const router = express.Router();

// 导入控制器模块
const index_controller = require('../controllers/indexController');
const account_controller = require('../controllers/accountController');

/// 主页 ///
router.get('/', index_controller.index);

/// 注册 GET ///
router.get('/signup', account_controller.signup_get);

/// 注册 POST ///
router.post('/signup', account_controller.signup_post);

/// 登录 GET ///
router.get('/signin', account_controller.signin_get);

/// 登录 POST ///
router.post('/signin', account_controller.signin_post);

module.exports = router;
