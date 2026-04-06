const express = require('express')
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes')
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json());
app.use(cookieParser());

/* jo bhi maine api baniye hain woh router ke madad se usse use karne ke liye hame prefix lagne padth /api/auth
app.use("/prefix", router) 
Jo bhi routes authRoutes file me hain, unke aage /api/auth prefix lag jaayega” */
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);



module.exports = app