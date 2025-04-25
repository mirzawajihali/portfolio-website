// netlify/functions/send-email.js
const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const requestBody = JSON.parse(event.body);
    const { name, email, subject, message } = requestBody;

    // Validate form inputs
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Log API key existence (but not the actual key for security)
    console.log('RESEND_KEY exists in Netlify function:', !!process.env.RESEND_KEY);
    
    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_KEY);

    // Send email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'mirzawajihali00@gmail.com',
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

    console.log('Email sent successfully from Netlify function:', data);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error('Error sending email from Netlify function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        message: error.message,
        details: error.toString()
      })
    };
  }
};