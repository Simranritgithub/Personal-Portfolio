import mongoose from "mongoose";
import User from "../User.js";
const ProjectSchema = new mongoose.Schema({
  adminId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required:true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagetype: {
    type: String,
    enum:['Png','Jpg','Jpeg','Webp','Svg'], 
    required: true,
  },
  imageUrl:{
    type: String,
    
  },
  tech: {
    type: [],
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
  },
  
}, { timestamps: true });
const Project = mongoose.model("Project", ProjectSchema);
export default Project;