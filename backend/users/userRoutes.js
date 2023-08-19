const express = require('express');
const router = express.Router();
const UserController = require('./UserController');
require('../config');
const app=express();
app.use(express.json());


router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
