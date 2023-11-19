const mysql = require('mysql2/promise');
const connection = require('../../config/database');

// TOKEN
require('dotenv').config();
const ourSecret = process.env.JWT_TOKEN;
const jwt = require('jsonwebtoken');

async function verifyUser(email, res)
{
    try {
        const [queryResults] = await connection.execute('SELECT * FROM usuario WHERE usuario.email = ?',
            [email]
        );

        if(queryResults.length == 0)
        {
            return new Error('Erro Durante a Validação do Token!');
        }
        return queryResults[0];

    } 
    catch (error) 
    {
        res.status(500).json({ error: 'Erro Interno, por favor, tente novamente!'});
    }
}

async function WithAuth(req, res, next)
{
    const token = req.headers['x-acess-token'];

    if(!token)
    {
        res.status(404).json({error: 'Não Autorizado: Nenhum token encontrado!'});
    }
    else
    {
        jwt.verify(token, ourSecret, (err, decode) => 
        {
            if(err)
                res.status(404).json({error: 'Não Autorizado: Token inválido!'});
            else
            {
                verifyUser(decode.email, res)
                    .then((user)=>
                    {
                        req.user = user;
                        next();
                    })
                    .catch((error)=>
                    {
                        res.status(404).json({error: error.message});
                    })
            }
        });
    }
}

module.exports = WithAuth;