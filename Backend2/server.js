require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB()

port = process.env.PORT

app.listen(port,()=>{
    console.log("Server has started");
})