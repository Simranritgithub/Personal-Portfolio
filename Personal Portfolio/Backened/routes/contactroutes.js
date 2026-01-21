import {sendContactEmail} from '../Controller/contactcontroller.js';
import express from 'express';
const router=express.Router();
router.post('/',sendContactEmail);
export default router;