import dotenv from "dotenv"

dotenv.config(
    {
        path:"./.env"
    }
);
import {app} from "./src/app.js"
import { connectDB } from "./src/db/db.js";

const PORT = process.env.PORT || 3000;
connectDB().then((res)=>{
    app.on("error", (err)=>{
        console.log("Error in connecting DB TO SERVER",err);
    })
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
    })
    .catch((err)=>{
        console.log("Error in database Connection!",err);
    })

    




