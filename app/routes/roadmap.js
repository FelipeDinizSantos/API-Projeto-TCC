const express = require('express');
const router = express.Router();
const roadmapSchema = require('../model/roadmap');
const withAuth = require('../middlewares/auth');
const createRoadmap = require('../model/createRoadmap');

router.post('/', withAuth, async(req, res) =>
{
    const { title, description, authorID, categoryID, tags } = req.body;
    const roadmap = new roadmapSchema(title, description, authorID, categoryID, tags);
    
    try 
    {
        const result = await createRoadmap(roadmap);
        res.status(200).json(result)
    } catch (error) 
    {
        res.status(500).json({error: error.message});
    }
   
})

module.exports = router;