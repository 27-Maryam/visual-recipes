const express = require("express");
const cors = require("cors");
const recipes = require("./data.json");

const app = express();
app.use(cors());

app.get("/recipes", (req, res) => {
    res.json(recipes);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
