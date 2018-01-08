const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname + "/../app/index.html"))
);

app.use(express.static(path.resolve(__dirname + "/../app/"))); //Serves resources from public folder

app.get("/app.css", (req, res) =>
    res.sendFile(path.resolve(__dirname + "/../app/app.css"))
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));