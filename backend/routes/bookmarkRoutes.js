const express = require('express');
const { getAll, deleteBooki, createBooki } = require('../controller/bookmarkController');
const route = express.Router();



// GET

route.get('/bookmarks',getAll)
// DELTE
route.delete('/bookmark/:id',deleteBooki)
// POST
route.post('/bookmark/create',createBooki)
module.exports = route;
