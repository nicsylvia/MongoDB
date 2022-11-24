const express = require("express");

const PORT = 2030;
const server = express();
require("./config/db");
const set06Router = require("./Router/set06Router");
server.use(express.json());


server.get("/", (req, res) =>{
    res.status(200).json({
        message: "server is up and running"
    })
});

server.use("/api", set06Router)

server.listen(PORT, () =>{
    console.log(`Listening to my port: ${PORT}`);
})