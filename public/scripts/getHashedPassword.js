const bcrypt = require('bcrypt');

async function getHashedPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) 
            {
                reject(new Error('Erro Interno, por favor, tente novamente!'));
            } 
            else 
            {
                resolve(hashedPassword);
            }
        });
    });
}

module.exports = getHashedPassword;