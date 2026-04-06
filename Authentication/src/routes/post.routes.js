const express = require("express");
const router = express.Router(); 
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


/* Token cookie me store hota hai, isliye har baar login nahi karna padta.
Lekin beech me agar admin user ko block ya delete kar de,
toh sirf token check karna safe nahi hai.
Isliye database se verify karte hain ki user abhi bhi valid hai ya nahi. */
router.post("/create", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);


    //Token bolta hai: “yeh banda pehle valid tha”
// Database bolta hai: “yeh banda abhi bhi valid hai ya nahi”
        const user = await userModel.findOne({
        _id: decoded.id,
        });
        console.log(user);

    res.json(user); 
  } catch (err) {
    return res.status(401).json({
      message: "Token is invalid!",
    });
  }
});

module.exports = router;
