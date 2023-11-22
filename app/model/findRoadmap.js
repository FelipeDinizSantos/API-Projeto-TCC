const connection = require('../../config/database');
const mysql = require('mysql2/promise');
const roadmapSchema = require('./roadmapSchema');

async function findRoadmap(title)
{
    const [queryResults] = await connection.execute('SELECT * FROM roadmaps WHERE roadmaps.titulo = ?', 
        [title]
    );  
    
    if(queryResults.length == 0)
    {
        throw new Error('Roadmap não encontrado!');
    }
    else
    {
        const roadmap = queryResults[0];
        return new roadmapSchema(roadmap.titulo, roadmap.descricao, roadmap.autorID, roadmap.categoriaID, roadmap.tags)
    }
}

module.exports = findRoadmap;