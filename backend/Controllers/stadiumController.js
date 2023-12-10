const Stadium = require('../Models/Stadium');
const Match = require('../Models/Match');
const authorization = require('../Middleware/Authorization');

// add a stadium
const addStadium = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try{
        // check for required fields
        if (!(req.body.name && req.body.width && req.body.height)) {
            return res.status(400).send("Please fill all required fields");
        }
        // check for duplicate names
        const isDuplicate = await Stadium.findOne({ name: req.body.name })
        if (isDuplicate) {
            return res.status(400).send("Stadium already exists");
        }
        // create stadium using req body fields
        const stadium = await Stadium.create({ ...req.body });
        await stadium.save();
        return res.status(200).send(stadium);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

};

// delete a stadium
const deleteStadium = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try {
        const stadium = await Stadium.findById(req.params.id);
        if (!stadium) {
            return res.status(404).send("Stadium not found");
        }
        await Stadium.findByIdAndDelete(req.params.id);
        return res.status(200).send("Stadium deleted successfully");
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
};

// get all stadiums
const getStadiums = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try {
        const stadiums = await Stadium.find();
        return res.status(200).send(stadiums);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
};

// get a stadium
const getStadium = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try {
        const stadium = await Stadium.findById(req.params.id);
        if (!stadium) {
            return res.status(404).send("Stadium not found");
        }
        return res.status(200).send(stadium);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
};

// update a stadium
// the admin can update the name, width, and height of the stadium
const updateStadium = async (req, res) => {
    // check if the user is logged in and an admin
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }
    try {
        const stadium = await Stadium.findById(req.params.id);
        if (!stadium) {
            return res.status(404).send("Stadium not found");
        }
        // check for duplicate names
        const isDuplicate = await Stadium.findOne({ name: req.body.name })
        if (isDuplicate) {
            return res.status(400).send("Stadium already exists");
        }
        // check what has the admin updated
        if (req.body.name) {
            stadium.name = req.body.name;
        }
        if (req.body.width) {
            stadium.width = req.body.width;
        }
        if (req.body.height) {
            stadium.height = req.body.height;
        }
        await stadium.save();
        return res.status(200).send(stadium);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = {addStadium, deleteStadium, getStadiums, getStadium, updateStadium};