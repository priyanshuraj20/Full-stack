const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required: true,
    },
    title:{
        type:String,
        required:true,
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId, //kis artist ne yeh music banaya uss artist ki id
        ref:"User",
        required:true,
    }
})
const musicModel = mongoose.model("Music",musicSchema);
module.exports = musicModel;