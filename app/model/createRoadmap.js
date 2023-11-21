const mysql = require('mysql2/promise');
const connection = require('../../config/database');

async function createRoadmap(roadmap)
{
    const [queryResults] = await connection.execute('SELECT * FROM roadmaps WHERE roadmaps.titulo = ?', 
        [roadmap.title]
    );

    if(queryResults.length == 0)
    {
        await connection.query('INSERT INTO roadmaps (titulo, descricao, autorID, categoriaID, tags) VALUES (?,?,?,?,?)', 
            [roadmap.title, roadmap.description, roadmap.authorID, roadmap.categoryID, roadmap.tags]
        );
        return {resultado: 'Roadmap criado com sucesso!'};
    }
    else throw new Error('Titulo já em uso!');
}

module.exports = createRoadmap;