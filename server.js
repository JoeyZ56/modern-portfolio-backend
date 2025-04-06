const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//Routes imports
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//Project Routes
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
