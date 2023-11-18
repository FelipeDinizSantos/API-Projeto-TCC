const bcrypt = require('bcrypt');

async function comparePassword(password, hashedPassword) 
{
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

module.exports = comparePassword;