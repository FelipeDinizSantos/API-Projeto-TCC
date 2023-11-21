const express = require('express');
const registerUser = require('../model/register');
const userSchema = require('../model/user');
const router = express.Router();

router.post('/', async (req, res)=>
{
    try 
    {
        const {name, email, password} = req.body;
        const user = new userSchema(name, email, password);
        const results = await registerUser(user);
        res.status(200).json({ resultado: results });
    } 
    catch (err) 
    {
        res.status(404).json({ error: err.message });
    }
});

module.exports = router;