require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const connectDb = require("./config/dbConnect");

// Initialization
const app = express();
connectDb();

// Using Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());

// Routes
app.use("/user", require("./app/routes/signup"));

// Run server
app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
});
