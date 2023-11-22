const connection = require('../../config/database');
const comparePassword = require('../../public/scripts/comparePassword');

async function login(user)
{
    const userProvided = user;
    const [queryResults] = await connection.execute('SELECT * FROM tb_usuario WHERE tb_usuario.email = ?', 
        [userProvided.email]
    );

    if(queryResults.length == 0)
    {
        throw new Error('Email ou Senha Incorretos!');
    }
    
    const password = queryResults[0].senha;

    const isSamePassWord = await comparePassword(userProvided.password, password);
    if(isSamePassWord)
    {
        return {isSamePassWord: isSamePassWord};
    }
    else
    {
        throw new Error('Email ou Senha Incorretos!');
    }
}

module.exports = login;