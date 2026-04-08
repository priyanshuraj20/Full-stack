import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const response = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`Mongo Db connected !! DB Host: ${response.connection.host}`);
    
    console.log("DB connected!");
  } catch (err) {
    console.err("Error is coming:", err);
    process.exit(1);
 }
}

export default connectDB;
