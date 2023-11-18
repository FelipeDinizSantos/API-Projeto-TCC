const bcrypt = require('bcrypt');

async function isSamePassword(password, hashedPassword) 
{
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

module.exports = isSamePassword;