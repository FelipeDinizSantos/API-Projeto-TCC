const express = require('express');
const router = express.Router();

const userSchemaLogin = require('../model/userSchemaLogin');
const userSchemaRegister = require('../model/userSchemaRegister');

const login = require('../model/login');
const registerUser = require('../model/register');

router.post('/login', async(req, res) =>
{
    //token
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    const ourSecret = process.env.JWT_TOKEN;

    const {email, password} = req.body;
    const user = new userSchemaLogin(email, password);
     
    try 
    {
        const result = await login(user);

        if(result.isSamePassWord === true)
        {
            const token = jwt.sign({email}, ourSecret, { expiresIn: '1d' });
            res.json({user: user, token: token});
        }
        else throw new Error('Erro durante a autenticação, tente novamente!');
    }
    catch (error) 
    {
        res.status(500).json({ error: error.message });
    }
})

router.post('/register', async (req, res)=>
{
    try 
    {
        const {name, email, password} = req.body;
        const user = new userSchemaRegister(name, email, password);
        const results = await registerUser(user);
        res.status(200).json({ resultado: results });
    } 
    catch (err) 
    {
        res.status(404).json({ error: err.message });
    }
});

module.exports = router;