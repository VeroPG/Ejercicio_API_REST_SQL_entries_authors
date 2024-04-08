const express = require('express');

const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getEntries);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);
router.post('/', entriesController.createEntry);


module.exports = {
    router
}