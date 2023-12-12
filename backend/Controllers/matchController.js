const Teams=require("../Teams");
const Match=require("../Models/Match");
const Stadium=require("../Models/Stadium");
const Official=require("../Models/Official");


// add a match
// only an admin can add a match
const addMatch = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try {
        // check for all the required fields
        if (!req.body.homeTeam || !req.body.awayTeam || !req.body.stadium || !req.body.dateTime || !req.body.referee || !req.body.linesmen) {
            return res.status(400).send("Please enter all the required fields");
        }
        // check if the date is valid
        if (new Date(req.body.dateTime) == "Invalid Date") {
            return res.status(400).send("Please enter a valid date");
        }
        // check if the stadium exists
        const stadium = await Stadium.findById(req.body.stadium);
        if (!stadium) {
            return res.status(404).send("Stadium not found");
        }
        // check if the home team exists
        // teams is an array
        if (!Teams.includes(req.body.homeTeam)) {
            return res.status(404).send("Home team not found");
        }
        // check if the away team exists
        if (!Teams.includes(req.body.awayTeam)) {
            return res.status(404).send("Away team not found");
        }
        // check if the referee exists
        const referee = await Official.findById(req.body.referee);
        if (!referee || referee.type != "Referee") {
            return res.status(404).send("Referee not found");
        }

        // check that the linesmen are 2
        if (req.body.linesmen.length != 2) {
            return res.status(400).send("Please enter 2 linesmen");
        }
        // check if the linesmen exist
        const linesmen = await Official.find({ _id: { $in: req.body.linesmen } });
        if (linesmen.length != 2 || linesmen[0].type != "Lineman" || linesmen[1].type != "Lineman") {
            return res.status(404).send("Linesmen not found");
        }



        // /////////////////////////////////////////// conditions ///////////////////////////////////////////
        // check if there is a match at the same time in the same stadium
        // same time means within 2 hours
        date1 = new Date(req.body.dateTime);
        date2 = new Date(req.body.dateTime);
        const time1 = new Date(date1.getTime() - 7200000);
        const time2 = new Date(date2.getTime() + 7200000);
        if (await Match.findOne({ stadium: req.body.stadium, dateTime: { $gte:  time1, $lte: time2} })) {
            return res.status(400).send("There is a match at the same time in the same stadium");
        }
        // check if any of the linesmen and the referee are already assigned to a match at the same time (within 2 hours)
        // cast the dateTime to a number to be able to compare it
        if (await Match.findOne({ $or: [{ referee: req.body.referee }, { linesmen: { $in: req.body.linesmen } }],dateTime: { $gte:  time1, $lte: time2} })) {
            // get the name and the type of the official assigned
            const official = await Official.findOne({ $or: [{ _id: req.body.referee }, { _id: { $in: req.body.linesmen } }] });
            return res.status(400).send(`The ${official.type} ${official.name} is already assigned to a match at the same time`);
        }
        // check if the home team is already assigned to a match at the same time (within 2 hours)
        if (await Match.findOne({ $or: [{ homeTeam: req.body.homeTeam }, { awayTeam: req.body.homeTeam }], dateTime: { $gte:  time1, $lte: time2} })) {
            return res.status(400).send("The home team is already assigned to a match at the same time");
        }
        // check if the away team is already assigned to a match at the same time (within 2 hours)
        if (await Match.findOne({ $or: [{ homeTeam: req.body.awayTeam }, { awayTeam: req.body.awayTeam }], dateTime: { $gte:  time1, $lte: time2} })) {
            return res.status(400).send("The away team is already assigned to a match at the same time");
        }


        // create the match
        const match = await Match.create({ ...req.body });
        // update the seats matrix of the match to fit the stadium dimensions
        // number of rows is the stadium height and number of columns is the stadium width
        match.seats = Array.from({ length: stadium.height }, () => Array(stadium.width).fill(false));
        await match.save();
        // push the match into the stadium matches array
        stadium.matches.push(match);
        await stadium.save();
        // push the match into the linesmen and the referee matches array
        // they are already found in the linesmen and the referee variables
        referee.matches.push(match);
        await referee.save();
        linesmen[0].matches.push(match);
        await linesmen[0].save();
        linesmen[1].matches.push(match);
        await linesmen[1].save();

        return res.status(200).send(match);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
};

// delete match
const deleteMatch= async (req,res)=>{
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    // find the match with the id and delete it
    try{
        const match = await Match.findById(req.params.id);
        if (!match) {
            return res.status(404).send("Match not found");
        }
        // remove the match from the stadium matches array
        const stadium = await Stadium.findById(match.stadium);
        stadium.matches.pull(match);
        await stadium.save();
        // remove the match from the linesmen and the referee matches array
        const referee = await Official.findById(match.referee);
        referee.matches.pull(match);
        await referee.save();
        const linesmen = await Official.find({ _id: { $in: match.linesmen } });
        linesmen[0].matches.pull(match);
        await linesmen[0].save();
        linesmen[1].matches.pull(match);
        await linesmen[1].save();
        // delete the match, find by id and delete
        await Match.findByIdAndDelete(req.params.id);
        return res.status(200).send("Match deleted successfully"); 
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

};

// get all matches
const getMatches=async (req,res)=>{

    // get all the matches and all the info in them from the other models
    try{
        const matches=await Match.find().populate('stadium').populate('referee').populate('linesmen');
        return res.status(200).send(matches);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

};

// get match by id
const getMatch=async (req,res)=>{

    // get the match and all the info in it from the other models
    try{
        const match=await Match.findById(req.params.id).populate('stadium').populate('referee').populate('linesmen');
        if(!match)
        {
            return res.status(404).send("Match not found");
        }
        return res.status(200).send(match);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
};


module.exports = {addMatch, deleteMatch, getMatches, getMatch};
