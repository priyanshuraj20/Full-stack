const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        


    }
)