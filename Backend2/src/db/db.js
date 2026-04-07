const mongoose = require('mongoose')

async function connectDB(){
    try{
      await  mongoose.connect(process.env.MONGO_URI);
      console.log("DB connected!");
    }catch(err){
        console.err("Error in coinnecting db",err);
    }
}

module.exports = connectDB