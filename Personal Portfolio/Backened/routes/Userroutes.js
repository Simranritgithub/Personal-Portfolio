
import express from "express";
import { registerUser, loginUser } from "../Controller/User.js";
import { protect } from "../Middlewares/Authenticate.js";
import { authorize } from "../Middlewares/Role.js";
import { allprojects, createProject, getProjects } from "../Controller/Project.js";
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

export default router;