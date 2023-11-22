const getHashedPassword = require('../../public/scripts/getHashedPassword');
const connection = require('../../config/database');

async function registerUser(newUser) {
    var user = newUser;

    let hashedPassword = await getHashedPassword(user.password);
    user.password = hashedPassword;

    const [queryResults] = await connection.execute('SELECT * FROM usuario WHERE usuario.email = ?', 
        [user.email]
    );

    if(queryResults.length == 0)
    {
        await connection.query('INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)', 
            [user.name, user.email, user.password]
        );
        return {resultado: 'Registro Realizado!'};
    }
    else throw new Error('Email Já Registrado!');
}

module.exports = registerUser;
