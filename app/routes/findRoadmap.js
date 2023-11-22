const express = require('express');
const router = express.Router();
const findRoadmap = require('../model/findRoadmap');

router.get('/', async(req, res) =>
{       
    try 
    {
        const title = req.query.title.toString();
        const roadmap = await findRoadmap(title);
        res.status(200).json({roadmap: roadmap});

    } catch (error) 
    {
        res.status(500).json({error: error.message});   
    }
})

module.exports = router;