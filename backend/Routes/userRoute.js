const express = require('express');
const userRouter = express.Router();

const userController = require('../Controllers/userController');


userRouter.get('/login', userController.login);
userRouter.get('/signUp', userController.signUp);

module.exports = userRouter;