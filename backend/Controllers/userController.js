const User = require('../Models/User');
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const password = "Admin@123";

// Hashing the password
bcrypt.genSalt(saltRounds)
    .then(salt => {
    return bcrypt.hash(password, salt)
    }).then(hash => {
    }).catch(err => console.error(err.message));


// signUp function
const signUp = async (req, res) => {

    try
    {
        // check for required fields
        if (!(req.body.username && req.body.firstName && req.body.lastName && req.body.password && req.body.email && req.body.birthDate && req.body.gender && req.body.city ) )
        {
            return res.status(400).send("Please fill all required fields");
        }

        // check for duplicate emails
        const isDuplicate = await User.findOne({email: req.body.email})
        if (isDuplicate)
        {
            return res.status(400).send("Email already exists");
        }

        // encrypt password using bycrypt
        const hashedPass = await bcrypt.hash(req.body.password, saltRounds);
        //creating user using req body fields
        const user = await User.create({...req.body});
        user.password = hashedPass;
        const token = jwt.sign({ _id: user._id.toString() }, "secrethash", {
            expiresIn: "24h"
        });
        await user.save();
        return res.status(200).send({user, token});
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
};

// login function
const login = async (req, res) => {
    try {
        // Check for required fields
        if (!(req.body.email && req.body.password)) {
            return res.status(400).send("Please fill all required fields");
        }

        // Check if email exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send("Email does not exist");
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }

        // Create and assign token
        const token = jwt.sign({ _id: user._id.toString() }, "secrethash", {
            expiresIn: "24h"
        });

        return res.status(200).json({ token, user });

    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {login, signUp}

