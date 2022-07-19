const mongoose  = require('mongoose');

const bookmarkSchema = new mongoose.Schema({

    link:{
        type:String
    },
})


const bookmarkModel = mongoose.model("bookmark",bookmarkSchema);
module.exports = bookmarkModel