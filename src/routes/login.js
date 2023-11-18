const express = require('express');
const User = require('../model/user');
const login = require('../model/login');
const router = express.Router();

//token
const jwt = require('jsonwebtoken');
require('dotenv').config();
const ourSecret = process.env.JWT_TOKEN;

router.post('/', async(req, res) =>
{
    const {name, email, password} = req.body;
    const user = new User(name, email, password);
     
    try 
    {
        const result = await login(user);
        if(result.isSamePassWord === true)
        {
            const token = jwt.sign({email}, ourSecret, { expiresIn: '1d' });
            res.json({user: user, token: token});
        }
        else throw new Error('Erro durante a autenticação, tente novamente!');
    } catch (error) 
    {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;