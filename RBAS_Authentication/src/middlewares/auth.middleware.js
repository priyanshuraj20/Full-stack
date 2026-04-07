/* 
Middleware:
req. ke andar jo bhi data ata hain sab READ and MODIFY kar skta hain.
response bhi send kar skta hain
*/
const jwt = require("jsonwebtoken")

async function authArtist(req,res,next){
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
      if (!token) {
        return res.status(401).json({
          message: "Unauthorized User",
        });
      }
    
      let decoded;
    
      try {
        //yeh doh output deta agar token shi toh jis data ke saath tumhne token genrate kiya woh data agar token galat toh error aata.
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        if (decoded.role !== "artist") {
          return res.status(403).json({
            message: "You don't have access to create album!",
          });
        }
        req.user = decoded;  // req ke andar ee nayi property add kardega || hum ek nayi property bana rahe user : aur uski value deh deh rahe decoded as create album n=mein hame artist id chiaye kon si artiust ka hain 


        next();//role artist nikala toh yeh line chalega


      } catch (err) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }
}
async function authUser(req,res,next){
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized User",
      });
    }


    try {
      //yeh doh output deta agar token shi toh jis data ke saath tumhne token genrate kiya woh data agar token galat toh error aata.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
      if (decoded.role !== "artist" && decoded.role !== "user") {//na apka role user na artist toh kon hoo app UNauthorized
        return res.status(403).json({
          message: "You don't have access to create album!",
        });
      }
      req.user = decoded; // req ke andar ee nayi property add kardega || hum ek nayi property bana rahe user : aur uski value deh deh rahe decoded as create album n=mein hame artist id chiaye kon si artiust ka hain

      next(); //role artist nikala toh yeh line chalega
    } catch (err) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

}
module.exports = {authArtist , authUser};