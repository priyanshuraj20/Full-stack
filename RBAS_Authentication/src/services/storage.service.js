const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(buffer) {
  if (!buffer) throw new Error("No file provided");

  try {
    const fileName = "music_" + Date.now() + ".mp3";

    const file = await toFile(buffer, fileName);

    const result = await client.files.upload({
      file,
      fileName,
      folder: "yt-complete-backend/music",
    });

    return result;
  } catch (err) {
    console.log("Upload error:", err);
    throw err;
  }
}

module.exports = uploadFile;
