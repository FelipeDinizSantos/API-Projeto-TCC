const connection = require('../../config/database');
const mysql = require('mysql2/promise');
const isSamePassWord = require('../../public/scripts/isSamePassword');

async function login(user)
{
    const userProvided = user;

    try 
    {
        const [queryResults] = await connection.execute('SELECT * FROM usuario WHERE usuario.email = ?', [userProvided.email]);

        if(queryResults.length == 0)
        {
            return new Error('Email ou Senha Incorretos!');
        }
        const password = queryResults[0].senha;

        const samePassWord = await isSamePassWord(userProvided.password, password);
        if(samePassWord)
        {
            return {same: samePassWord};
        }
        else
        {
            return new Error('Email ou Senha Incorretos!');
        }
    } 
    catch (error) 
    {
        return {erro: error.message};
    }
}

module.exports = login;