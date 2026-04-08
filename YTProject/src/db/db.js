import mongoose from "mongoose"
import {MONGO_DB_NAME} from "../constants.js"

async function connectDB(){
    try{
    const response  = await mongoose.connect(`${process.env.MONGO_DB_URi}/${MONGO_DB_NAME}`); 

    console.log("DATABASE CONNECTED SUCESSFULLY",response.connection.host);
    }catch(err){
        console.log("Error in connecting to database",err);
    }
}

export {connectDB};