//server ko start karna
const app = require("./src/app")
const connectDB = require("./src/db/db");

connectDB();
const port = 3000

//server start:
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})

