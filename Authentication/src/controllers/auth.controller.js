const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken")

/* Jab user login karta tha:

server check karta ✔
par next request mein kaise pata chalega ki yeh same user hai? ❓

Server yaad nahi rakhta by default.*/


async function registerUser(req,res) {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email   //agar same email exist nahi karta toh null return karta 
    })
    if(isUserAlreadyExist){
        return res.status(409).json(
            {
                message:"User Already exists!"
            }
        )
    }


    const user = await userModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign(
      {
        // token ess sign method se banta toh hame isme doh chiz pas karni hoti : valid uynique user and jwtsecretskey. unique ka baat kiye mongo db mein har user ka id bhi hota woh toh sabke liye unique hoga toh iud bhej deh rahe
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token); //yeh token ko cookie mein store karta  hamre server ke pas adming access rahta cookie ka kabhi bhi read and write kar skta cookie storage ko

    res.status(201).json({
      message: "User Registered Successfully",
      user,
      token,
    });
}

module.exports = {registerUser}