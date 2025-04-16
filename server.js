const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // load .env file

const app = express();
app.use(cors());

app.get("/get-location", async (req, res) => {
    try {
        const response = await axios.get(`https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch location" });
    }
});

//app.listen(3000, () => console.log("Server running on port 3000"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
