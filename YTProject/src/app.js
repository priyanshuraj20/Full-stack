import cookieParser from "cookie-parser";
import express, { urlencoded } from "express"
const app = express()

app.use(express.json());
app.use(urlencoded(
    {
        extended:true,
    }
))
app.use(express.static("public"));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("connection checking")
})

export {app}