const connection = require('../../config/database');
const roadmapSchema = require('./roadmapSchema');

async function findRoadmap(title)
{
    const [queryResults] = await connection.execute('SELECT * FROM roadmaps WHERE roadmaps.titulo LIKE ?', 
        [title+'%']
    );  
    
    if(queryResults.length == 0)
    {
        throw new Error('Roadmap não encontrado!');
    }
    else if(queryResults.length == 1)
    {
        const roadmap = queryResults[0];
        return {roadmap : new roadmapSchema(roadmap.titulo, roadmap.descricao, roadmap.autorID, roadmap.categoriaID, roadmap.tags)}
    }
    else
    {
        const roadmaps = [] 
        queryResults.forEach(roadmap => 
        {
            roadmaps.push(new roadmapSchema(roadmap.titulo, roadmap.descricao, roadmap.autorID, roadmap.categoriaID, roadmap.tags))
        })
        return {roadmaps: roadmaps};
    }
}

module.exports = findRoadmap;