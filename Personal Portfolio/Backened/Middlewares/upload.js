import cloudinary from "../Config/Cloudinary.js";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import multer from "multer";
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "patient-reports",
    resource_type: "image", 
    
    access_mode: "public", 
  },
});


const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

console.log("✅ upload middleware loaded");

export default upload;