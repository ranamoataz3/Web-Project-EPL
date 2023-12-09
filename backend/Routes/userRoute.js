const express = require('express');
const userRouter = express.Router();

const userController = require('../Controllers/userController');


userRouter.post('/login', userController.login);
userRouter.post('/signUp', userController.signUp);

module.exports = userRouter;