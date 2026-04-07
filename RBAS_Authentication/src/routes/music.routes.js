const express = require("express");
const multer = require('multer');
const { createMusic , createAlbum,getAllMusics ,getAllAlbums,getAlbumById} = require("../controllers/music.controller");
const authMiddleware = require("../middlewares/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
})
const router = express.Router();


router.post("/upload",authMiddleware.authArtist, upload.single("music"), createMusic);
router.post("/album", authMiddleware.authArtist, createAlbum);

//normal user jitne bhi music server pe create hue honge woh sun skta!
router.get("/",authMiddleware.authUser,getAllMusics);

router.get("/albums", authMiddleware.authUser, getAllAlbums);


//ess particular album ki music
router.get("/albums/:albumsId", authMiddleware.authUser, getAlbumById);

module.exports = router;
