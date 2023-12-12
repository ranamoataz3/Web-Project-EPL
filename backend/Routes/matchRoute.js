const express = require('express');
const matchRouter = express.Router();
const authorization = require('../Middleware/Authorization');
const matchController = require('../Controllers/matchController');

// create a match 
matchRouter.post('/addMatch', authorization, matchController.addMatch);
// delete a match
matchRouter.delete('/deleteMatch/:id', authorization, matchController.deleteMatch);
// get all matches
matchRouter.get('/getMatches', authorization, matchController.getMatches);
// get a certain match
matchRouter.get('/getMatch/:id', authorization, matchController.getMatch);

module.exports = matchRouter;