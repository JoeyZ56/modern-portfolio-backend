const express = require("express");
const router = express.Router();
const sendEmail = require("../middleware/nodeMailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmail({ name, email, message });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

module.exports = router;
