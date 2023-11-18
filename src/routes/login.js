const express = require('express');
const User = require('../model/user');
const login = require('../model/login');
const router = express.Router();

router.post('/', async(req, res) =>
{
    const {name, email, password} = req.body;
    const user = new User(name, email, password);
     
    try 
    {
        const results = await login(user);
        res.status(200).json({ resultado: results });

    } catch (error) 
    {
        res.status(404).json({ error: err.message });
    }
})

module.exports = router;