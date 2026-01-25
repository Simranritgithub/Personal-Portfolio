import 'dotenv/config'; 


import express from 'express';
import cors from 'cors';      
import contactroutes from './routes/contactroutes.js';
import connectDB from './Config/db.js';
import userroutes from './routes/Userroutes.js';
connectDB();
const app = express();
app.use(cors({
  origin: ['http://localhost:5173','https://euphonious-douhua-f1e3b8.netlify.app'],
  methods: ['GET','POST','PUT','DELETE','PATCH'],
}));
app.use(express.json());
app.use('/api/contacts',contactroutes);
app.use('/api',userroutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

