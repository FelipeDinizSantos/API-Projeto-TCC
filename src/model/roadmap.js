class Roadmap
{
    constructor(id, title, description, authorID, categoryID, tags, creationDate, editionDate)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorID = authorID;
        this.categoryID = categoryID;
        this.tags = tags;
        this.creationDate = creationDate;
        this.editionDate = editionDate;
    }
}

module.exports = Roadmap;