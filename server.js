const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/get-location", async (req, res) => {
    try {
        const response = await axios.get("https://ipinfo.io/json?token=350711f9584ea2");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch location" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
