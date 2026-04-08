const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(buffer) {
  try {
    const file = await toFile(buffer, "image.jpg");

    const result = await client.files.upload({
      file: file,
      fileName: "image.jpg",
    });

    return result;
  } catch (err) {
    console.log("Upload error:", err);
    throw err;
  }
}

module.exports = uploadFile;
