const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve HTML files
app.use(express.static(__dirname));

// Health check
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
