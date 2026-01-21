import Project from '../Model/Admin/Projects.js';


// Create a new project
export const createProject = async (req, res) => {
  try {
    const { title, description, imagetype, tech, github, demo } = req.body;
    const adminId = req.user.userId; 
   //console.log(adminId);
    const imageUrl=req.file.path;
    const newProject = await Project.create({
      adminId,
      title,
      description,
      imagetype,
      tech,
      github,
      demo,
      
      imageUrl
    });
    res.status(201).json({ success: true, message: "Project created successfully", data: newProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
export const getProjects =async(req,res)=>{
  try{
  const adminId=req.user.userId;
  console.log(adminId);
  const projects = await Project
  .find({ adminId })
  .populate("adminId", "name email");
  const totalprojects =projects.length;
  const recentprojects=[...projects].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  
 res.status(200).json({
   success:true,
   message:"Projects retrieved successfully",
   projects,
   totalprojects,
   recentprojects
 })}

 catch(error){
  console.log(error)
  res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message,
    });
 }

}
export const allprojects= async(req,res)=>{
  try {
    const allprojects= await Project.find();
    const totalprojects = allprojects.length;
    const recentprojects=[...allprojects].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,6);
    res.status(200).json({
      message:"recentsprojects succesfully retrieved",
      success:true,
      recentprojects,
      totalprojects
    })
  } catch (error) {
    res.status(500).json({
      message:"Failed",
      success:false,
      error:error.message
    })
  }
}