import mongoose from "mongoose";

const visitesShema = new mongoose.Schema({

    links:{
        type:mongoose.Types.ObjectId,
        ref:'bookmark'
    },
    noOfVisits:{
        type:Number
    },
    visted:{
        type:String
    }
})


const visitedModel = mongoose.model('visited',visitesShema);
export default visitedModel