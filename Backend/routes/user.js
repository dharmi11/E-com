const express = require('express');
const { login, getusers, register } = require('../controller/user');
const router = express.Router();

router.post('/login' , login);
router.post('/register' , register);
// router.get('/get' , getusers);

module.exports = router

