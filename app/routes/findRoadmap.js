const express = require('express');
const router = express.Router();
const findRoadmap = require('../model/findRoadmap');

router.get('/', async(req, res) =>
{       
    try 
    {
        const title = req.query.search.toString();
        const result = await findRoadmap(title);
        res.status(200).json(result);

    } catch (error) 
    {
        res.status(500).json({error: error.message});   
    }
})

module.exports = router;