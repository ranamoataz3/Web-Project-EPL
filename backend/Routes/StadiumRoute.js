const express = require('express');
const stadiumRouter = express.Router();
const authorization = require('../Middleware/Authorization');
const stadiumController = require('../Controllers/stadiumController');

// add a stadium
stadiumRouter.post('/addStadium', authorization, stadiumController.addStadium);
// delete a stadium
stadiumRouter.delete('/deleteStadium/:id', authorization, stadiumController.deleteStadium);
// get all stadiums
stadiumRouter.get('/getStadiums', authorization, stadiumController.getStadiums);
// get a certain stadium
stadiumRouter.get('/getStadium/:id', authorization, stadiumController.getStadium);
// update a certain stadium
stadiumRouter.put('/updateStadium/:id', authorization, stadiumController.updateStadium);

module.exports = stadiumRouter;