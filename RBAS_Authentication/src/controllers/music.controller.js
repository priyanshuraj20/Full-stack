const musicModel = require("../models/music.model");
const uploadFile = require("../services/storage.service");
const jwt = require("jsonwebtoken");
const albumModel = require("../models/album.model");


async function createMusic(req, res) {
  //phale check karnege token hain yeh nhai than valid token -> aur jab hum token create karte jo data dalte woh milta , hamne role dala tha agar role artist mila tabhi hum music create kar skte:

    //using middlw ware phale : to check token   and ki role artist hi hain na !

  const { title } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "File is required",
    });
  }

  try {
    const result = await uploadFile(file.buffer);

    const music = await musicModel.create({
      uri: result.url,
      title,
    //   artist: decoded.id,
    //dekho hame yeh artist id ki jaroorst thi hamne middle ware ke req mein ek nayi property bana dhi thi aur uski value decode assign kiya tha toh abb ham yeh use kar skte.
    artist : req.user.id,
    });

    res.status(201).json({
      message: "Music created Successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}

//create Album
async function createAlbum(req, res) {
  

    //using middle ware : to check token 


  const { title, musics } = req.body;
  //agar musics empty / invalid hua toh?
  if (!title || !musics || !Array.isArray(musics)) {
    return res.status(400).json({
      message: "Title and musics array are required",
    });
  }

  try {
    const album = await albumModel.create({
      title,
      artist: req.user.id,    //decode.id -> using middleware we are creatin gnew property !
      musics,
    });

    res.status(201).json({
      message: "Album Created Successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
async function getAllMusics(req,res){
  const musics = await musicModel.find();
  //.populate("artist" ,"username email") => karne se artist ki puri detail aajayega : aise sirf id aaygi populate : email, id,username,password   ,,agar kcuh particular hi chaiye toh comma ke saath usko mention kardoh

  /* .find()
  .sort({ createdAt: -1 }):::ata ko order me arrange karta hai 1 ->(old->new) -1(new->old)
  .skip((page - 1) * limit) ->pagination ke liye use hota hai : first 10 records skip karo  ::skip(1) : 1 skip hojayega ,2 toh 2

  .limit(Number(limit))  //kitne records return karne hai limit =10 sirf 10 hi record send hoga  upper limit

  .populate("artist", "username email")
  .populate("musics", "title uri"); //array of IDs ko full objects me convert karta 

  //heavy populate avoid karo!
  */

  res.status(200).json({
    message: "Musics fetched successfully",
    musics: musics,
  });
}

async function getAllAlbums(req, res) {
  try {
    const albums = await albumModel
      .find()

    //   .populate("artist", "username email")
    //   .populate("musics");
    //populate :yeh tabhi kaam karega jab: artist → User model ref ho ✔ and  musics → Music model ref ho  👉 warna empty aayega

    //aur samjho ham spotify kholte toh album imagee and caption dikhata par music load nahi hota dekho music bahiut hote agar saare load ek baar mein karne lag jaye toh server hi crash kar jayega. so we use .select("title username -music") -> issse music load nahi hoga  
    //-> music ke liye hum ek aur api develop karnege 

    res.status(200).json({
      message: "All Albums Fetched",
      albums: albums,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}


//particular album music:
async function getAlbumById(req,res){
    const albumId = req.params.Id;

    const album = await albumModel.findById(albumId).populate("artist", "username email")

    return res.status(200).json(
        {
            message:"Album fetched successfully!",
            album:album,
        }
    )
}

module.exports = { createMusic, createAlbum, getAllMusics ,getAllAlbums ,getAlbumById};
