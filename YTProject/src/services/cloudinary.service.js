import { v2 as cloudinary } from "cloudinary";
import fs from "fs"   //node mein hota used for file handling!

//file -> multer ke through -> server pe ata ->  abb yeh se cloudinary -> abb file server se unlink karte



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


//method file ka path dunga usko cloudinary mein upload karo , aur hogya toh usko server se unlink kardoh

const uploadOnCloudinary = async (localFilePath)=>{
    try {
      if (!localFilePath) return null;
      //upload the file on cloudinary :
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto", //aisa bahut saare extra dal skte
      });
      //  delete local file after successful upload
      fs.unlinkSync(localFilePath);
      //file has been successfully uploaded:
      console.log("file is uploaded on cloudinary!", response.url);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath); //remove the locally saved file as the upload operation get failed warna server pe useless file jjamte rahenge!
      // 🔥 delete local file after successful upload
      console.log("Cloudinary upload failed:", error);
      return null;
    }
}
//"file server pe temporary hoti hai — kaam khatam → delete karni hi padegi"
export {uploadOnCloudinary}