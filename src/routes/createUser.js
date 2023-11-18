const express = require('express');
const createUser = require('../model/createUser');
const router = express.Router();

router.post('/', async (req, res)=>
{
    try 
    {
        let user = req.body;
        let hashedPassword = await createUser(user);
        res.status(200).json({ senha: hashedPassword });
    } 
    catch (err) 
    {
        res.status(404).json({ error: err });
    }
});

module.exports = router;