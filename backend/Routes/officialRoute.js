const express = require('express');
const officialRouter = express.Router();
const authorization=require('../Middleware/Authorization');
const officialController = require('../Controllers/officialController');


officialRouter.post('/createOfficial', officialController.createOfficial);
officialRouter.delete('/deleteOfficial/:id', officialController.deleteOfficial);

// these 2 functions, only the admin can use them
officialRouter.get('/getOfficials',authorization ,officialController.getOfficials);
officialRouter.get('/getOfficial/:id',authorization, officialController.getOfficial);

// TODO: Function to add an official to a certain match


module.exports = officialRouter;

