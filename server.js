const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//Imported Routes
const projectRoutes = require("./routes/projectRoutes");
const SendEmailRoutes = require("./routes/emailRoute");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/projects", projectRoutes);
app.use("/api/send-email", SendEmailRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
