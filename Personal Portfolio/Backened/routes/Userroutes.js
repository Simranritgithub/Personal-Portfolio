
import express from "express";
import { registerUser, loginUser } from "../Controller/User.js";
import { protect } from "../Middlewares/Authenticate.js";
import { authorize } from "../Middlewares/Role.js";
import { allprojects, createProject, deleteproject, getprojectbyid, getProjects, updateproject } from "../Controller/Project.js";
import upload from "../Middlewares/upload.js";
const router = express.Router();

// Register route (only accessible by admin)
router.post('/register', registerUser);

// Login route
router.post('/login/admin',   loginUser);
router.post("/add/project",protect,authorize("Admin"), upload.single("file"),createProject);
//adminpage
router.get("/get/projects",protect,authorize("Admin"),getProjects)
//homepage
router.get("/get/recentprojects",allprojects)
router.patch("/edit/project/:projectid",protect,authorize("Admin"),upload.single("file"),updateproject)
router.get("/get/project/:projectid",protect,authorize("Admin"),getprojectbyid);
router.patch("/delete/project/:projectid",protect,authorize("Admin"),deleteproject)

export default router;