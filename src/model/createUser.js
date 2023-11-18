const getHashedPassword = require('../../public/scripts/getHashedPassword'); 

async function createUser(user)
{
    try
    {
        let newUser = user;
        let hashedPassword = await getHashedPassword(newUser.password);
        return hashedPassword;
    }
    catch(err)
    {
        return'Houve um erro ao criar o usuario: ' + err;
    } 
}

module.exports = createUser;