const connection = require('../../config/database');

async function createRoadmap(roadmap)
{
    const [queryResults] = await connection.execute('SELECT * FROM tb_roadmap WHERE tb_roadmap.titulo = ?', 
        [roadmap.title]
    );

    if(queryResults.length == 0)
    {
        await connection.query('INSERT INTO tb_roadmap (titulo, descricao, autorID, categoriaID, tags) VALUES (?,?,?,?,?)', 
            [roadmap.title, roadmap.description, roadmap.authorID, roadmap.categoryID, roadmap.tags]
        );
        return {resultado: 'Roadmap criado com sucesso!'};
    }
    else throw new Error('Titulo já em uso!');
}

module.exports = createRoadmap;