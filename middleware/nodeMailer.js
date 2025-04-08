const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, message }) => {
  try {
    console.log("Sending email with:", name, email, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Nodemailer error:", error);
    throw error;
  }
};

module.exports = sendEmail;
