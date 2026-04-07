const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  const { username, email, password, role = "user" } = req.body;

  //1st check same name se and same email se koi data alreadyt hamre database mein present toh nahi!
  const isUserAlreadyExist = await userModel.findOne({
    $or: [
      //en dono mein se ek condition mein satisfy kar diya toh return karega user return
      { username },
      { email },
    ],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "User Already Exists!",
    });
  }
  //hashing the password:
  const hash = await bcrypt.hash(password, 10); //10->salt->adds unqiur random value to each password before hashing.//help to delay the attacks .
  //wrna create kardenge :
  const user = await userModel.create({
    username,
    email,
    password: hash,
    role,
  });
  //abb token create karwna hoga :
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  //aur yeh token ko cookie mein daleneg:

  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

async function loginUser(req, res) {
  const { username, email, password } = req.body;
  const userExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (!userExist)
    return res.status(401).json({
      message: "Invalid credential",
    });
  //kya password valid hain!  bcrypt.comapare : jo password abhi user dala usko jhash mein convert karegiu and then hamre hased password jo db mein hain uske saath compare karegi
  const isPasswordvalid = await bcrypt.compare(password, userExist.password);

  if (!isPasswordvalid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign(
    {
      id: userExist._id,
      role: userExist.role,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "User Logged in succesfully",
    user: {
      id: userExist._id,
      username: userExist.username,
      email: userExist.email,
      role: userExist.role,
    },
  });
}

async function logout(req,res){
    res.clearCookie("token")
    res.status(200).json(
        {
            message:"User logout successfully!"
        }
    )
}

module.exports = { registerUser, loginUser, logout };
