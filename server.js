// server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate form inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log API key existence (but not the actual key for security)
    console.log('RESEND_KEY exists:', !!process.env.RESEND_KEY);
    
    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_KEY);

    // Send email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'mirzawajihali00@gmail.com', // Update this with your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New message from your portfolio website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    // Return more detailed error information for debugging
    return res.status(500).json({ 
      error: 'Failed to send email', 
      message: error.message,
      details: error.toString()
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});