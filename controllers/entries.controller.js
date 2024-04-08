const entry = require('../models/entries.model'); // Importar el modelo de la BBDD



// GET http://localhost:3000/entries --> ALL

const getEntries = async (req, res) => {
    try {
        let entries = await entry.getAllEntries();
        res.status(200).json(entries);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
}



 //update PUT
const updateEntry = async (req, res) => {
    try {
        const response = await entry.updateEntry(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
}



//delete
const deleteEntry = async (req, res) => {
    try {
        const response = await entry.deleteEntry(req.body.title);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
}


// create
const createEntry = async (req, res) => {
    try {
        const response = await entry.createEntry(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({message:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getEntries,
    updateEntry,
    deleteEntry,
    createEntry 
}