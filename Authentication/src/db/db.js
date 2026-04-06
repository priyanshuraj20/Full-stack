const mongoose = require('mongoose')

async function connectDB(){
    try{
    await mongoose.connect(process.env.MONGOOSE_URI)

    console.log("DataBase connected Successfully");
    }catch(err){
        console.error("DataBase connection error",err);
    }
}

module.exports = connectDB