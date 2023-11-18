const mysql = require('mysql2/promise');
const getHashedPassword = require('../../public/scripts/getHashedPassword');
const connection = require('../../config/database');

async function registerUser(newUser) {
    var user = newUser;

    try 
    {
        let hashedPassword = await getHashedPassword(user.password);
        user.password = hashedPassword;

        const [results] = await connection.query('INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)', 
            [user.name, user.email, user.password]
        );

        return results; 
    } 
    catch (err) 
    {
        return { error: 'Houve um erro ao criar o usuário: ' + err.message };
    }
}

module.exports = registerUser;
