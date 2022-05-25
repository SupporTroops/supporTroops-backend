const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect(process.env.DB_URL);
    let conn = mongoose.connection;
    conn.on("connected", () => console.log("Database connected!"));
    conn.on("disconnected", () => console.log("Database disconnected!"));
    conn.on("error", () => console.error.bind(console, "Connection error: "));
};

module.exports = connectDb;
