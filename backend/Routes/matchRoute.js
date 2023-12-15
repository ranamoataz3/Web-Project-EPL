const express = require('express');
const matchRouter = express.Router();
const authorization = require('../Middleware/Authorization');
const matchController = require('../Controllers/matchController');

// admin only
// create a match 
matchRouter.post('/addMatch', authorization, matchController.addMatch);
// delete a match
matchRouter.delete('/deleteMatch/:id', authorization, matchController.deleteMatch);

// get all matches
// guest can view
matchRouter.get('/getMatches', matchController.getMatches);
// get a certain match
// guest can view
matchRouter.get('/getMatch/:id', matchController.getMatch);

// // reserve seats at a match
matchRouter.post('/reserveSeats/:id', authorization, matchController.reserveSeats);

module.exports = matchRouter;