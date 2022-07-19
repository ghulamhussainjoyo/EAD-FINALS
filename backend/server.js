const express = require('express')
const app =  express();
const databseConnection = require('./database/mongoDB')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cookieParseer = require('cookie-parser')
const cors = require('cors')
// middlewares
app.use(express.json())

// 📅🚀 Databse connectoin
databseConnection();

// Router
const Booki = require('./routes/bookmarkRoutes');





app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParseer())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(cors())

// 🚀 ROUTER 🚀
app.use(Booki)
// 🦷🦴👀👀
module.exports = app