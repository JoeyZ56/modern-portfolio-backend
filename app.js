// const express = require("express");
// const serverless = require("serverless-http");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// //Imported Routes
// const projectRoutes = require("./routes/projectRoutes");
// const SendEmailRoutes = require("./routes/emailRoute");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// //Routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/send-email", SendEmailRoutes);

// app.get("/", (req, res) => {
//   res.status(200).send("API is running...");
// });

// //Server Start
// // app.listen(PORT, () => {
// //   console.log(`A wild server has appeared!`);
// // });

// module.exports = serverless(app);

//Test

const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("It works! 🎉");
});

module.exports = serverless(app);
