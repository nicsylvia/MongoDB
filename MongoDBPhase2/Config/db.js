const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost/Devs";

mongoose.connect(MONGODB_URI);

mongoose.connection.on("open", () =>{
    console.log("Database Connected1");
}).once("error", (error) =>{
    console.log("Failed to connect to database: ", error);
})