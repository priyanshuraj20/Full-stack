import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json())
app.use(
  urlencoded({
    // Middleware to parse form data (application/x-www-form-urlencoded)
    // It converts incoming form data into a JS object and stores it in req.body
    extended: true,
    limit: "16kb",
  })
);
// Middleware to serve static files (HTML, CSS, images, JS) from "public" folder
// Allows direct access like: http://localhost:8000/file.html(directly serve)
// Without this, we would need to manually create routes for each file (api banan padtha)
app.use(express.static("public"))

app.use(cookieParser()); //Yeh ek middleware hai jo browser se aane wale cookies ko parse karke
//👉 req.cookies mein daal deta hai



app.get("/",(req,res)=>{
    res.send("root");
})
export default app