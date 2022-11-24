const express = require("express");

const port = 2040;

const server = express();

server.use(express.json());

require("./Config/db");

const devRouter = require("./Router/devsRouter");



server.get("/", (req, res) =>{
    res.status(200).json({
        message: "Server created successfully",
    })
});

server.use("/api", devRouter)

server.listen(port, () =>{
    console.log("Server created. DONE");
})