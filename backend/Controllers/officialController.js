const Official = require('../Models/Official');
const Match = require('../Models/Match');
const authorization=require('../Middleware/Authorization');

// create an official
const createOfficial = async (req, res) => {
    try {
        // check for required fields
        if (!(req.body.type && req.body.name)) {
            return res.status(400).send("Please fill all required fields");
        }
        // check that the type is either "Lineman" or "Referee" or "lineman" or "referee"
        if (!(req.body.type === "Lineman" || req.body.type === "Referee" || req.body.type === "lineman" || req.body.type === "referee")) {
            return res.status(400).send("Please enter a valid type");
        }
        // make the type first letter capital
        req.body.type = req.body.type.charAt(0).toUpperCase() + req.body.type.slice(1);

        // check for duplicate names
        const isDuplicate= await Official.findOne({name: req.body.name})
        if (isDuplicate)
        {
            return res.status(400).send("Official already exists");
        }

        // create official using req body fields
        const official = await Official.create({...req.body});
        return res.status(200).send(official);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
}; 

// delete an official
const deleteOfficial = async (req, res) => {
    try {
        const official = await Official.findById(req.params.id);
        if (!official) {
            return res.status(404).send("Official not found");
        }
        await Official.findByIdAndDelete(req.params.id);
        return res.status(200).send("Official deleted successfully");
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

    // TODO: delete the official from all matches he is in
};

// get all officials
const getOfficials= async (req, res) => {
    // check if the user is logged in and an admin 
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }

    try {
        const officials = await Official.find();
        return res.status(200).send(officials);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

};

// get an official
const getOfficial = async (req, res) => {
    // check if the user is logged in and an admin 
    // you are given the isAdmin field and the userId field from the authorization middleware
    if (!req.isAdmin) {
        return res.status(401).send("You are not an admin");
    }

    try {
        const official = await Official.findById(req.params.id);
        if (!official) {
            return res.status(404).send("Official not found");
        }
        return res.status(200).send(official);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }

};
module.exports = {createOfficial, deleteOfficial, getOfficials, getOfficial}