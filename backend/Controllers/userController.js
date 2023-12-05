const bcrypt = require("bcryptjs");
const saltRounds = 10;
const password = "Admin@123";

// Hashing the password
bcrypt.genSalt(saltRounds)
    .then(salt => {
    return bcrypt.hash(password, salt)
    }).then(hash => {
    }).catch(err => console.error(err.message));

