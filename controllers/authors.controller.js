const author = require('../models/authors.model'); 
//GET
const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await author.getAuthorByEmail(req.query.email);
        } else {
            authors = await author.getAllAuthors();
        }
        res.status(200).json(authors);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};


//CREATE - POST
const createAuthor = async (req, res) => {
    try {
        const response = await author.createAuthor(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
};


//UPDATE - PUT 
const updateAuthor = async (req, res) => {
    try {
        const response = await author.updateAuthor(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
}


//DELETE
const deleteAuthor = async (req, res) => {
    try {
        const response = await author.deleteAuthor(req.body.email);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
}




module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,

}