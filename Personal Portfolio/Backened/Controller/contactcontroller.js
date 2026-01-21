import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, }
      });
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name:${name}\n Email:${email} Message:${message}`,
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({success:true, message: 'Email sent successfully.' });
    }
    catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.',error });
    }}