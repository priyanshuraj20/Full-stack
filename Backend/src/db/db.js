const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(
      "mongodb+srv://yt:dgeb5U2nYr1AWVT2@cluster0.hps2nnu.mongodb.net/halley")

      console.log("DB connected!")
}
module.exports = connectDB