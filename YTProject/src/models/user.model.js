import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  usename: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true, //agar searching field enable karni index true kardoh
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index:true,
  },
  avatar:{
    type:String,  //cloudinary url we will use!
    required:true,

  },
  coverImage:{
    type:String
  },
  watchHistory:[
    {
        type:mongoose.Schema.Types.ObjectId
        
    }
  ],
  password:{
    type:String,
    required:[true,"Password is required!"]

  },
  refreshToken:{
    type:String
  }

},{timestamps:true});

//Pre hook = kisi operation ke pehle chalne wala function

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})//dekho abb dikat : jab bhi data save karegsa toh password save karega hame aisa karna jab mein password filed bheju tabhi , mano mein avator change karna tab mein change karunga toh password fir se save hoga!   jab password field bhju tabhi encrpyt karwana -> isliye if condit.


//Mongoose mein hum apne schema/model ke andar custom functions(methods) attach kar sakte ho

//Instance Methods:specific user/document pe kaam karta hai 
userSchema.methods.isPasswordCorrect = async function(password){
   return await  bcrypt.compare(password,this.password)  //true or false return
}


userSchema.methods.genrateAccessToken = async function(){
    return await jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
//Access Token = "abhi use kar Access token kaam karta hai
// Refresh token backup hai"Refresh Token = "baad mein naya le"
userSchema.methods.genrateRefreshToken = async function(){
    return await jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );

}

export const userModel = mongoose.model("User",userSchema)