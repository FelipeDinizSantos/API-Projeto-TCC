const express = require('express');
const router = express.Router();
const withAuth = require('../middlewares/auth');

const roadmapSchema = require('../model/roadmapSchema');
const createRoadmap = require('../model/createRoadmap');
const findRoadmap = require('../model/findRoadmap');

router.post('/createRoadmap', withAuth, async(req, res) =>
{
    const { title, description, authorID, categoryID, tags } = req.body;
    const roadmap = new roadmapSchema(title, description, authorID, categoryID, tags);
    
    try 
    {
        const result = await createRoadmap(roadmap);
        res.status(200).json(result)
    } 
    catch (error) 
    {
        res.status(500).json({error: error.message});
    } 
})

router.get('/findRoadmap', async(req, res) =>
{       
    try 
    {
        const title = req.query.search.toString();
        const result = await findRoadmap(title);
        res.status(200).json(result);
    } 
    catch (error) 
    {
        res.status(500).json({error: "Erro durante a busca! Confira os paramêtros fornecidos!"});   
    }
})

module.exports = router;