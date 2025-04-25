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
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/projects", projectRoutes);
app.use("/api/send-email", SendEmailRoutes);

app.get("/", (req, res) => {
  res.status(200).send("A wild server has appeared!");
});

// Listen to requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
