const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter using SMTP and your Gmail account details
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: 'noreply@yourdomain.com',
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message,
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return res.status(200).send('Email successfully sent');
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.message);
    }
  } else {
    // Respond with Method Not Allowed if the request method is not POST
    res.status(405).send('Method Not Allowed');
  }
};
