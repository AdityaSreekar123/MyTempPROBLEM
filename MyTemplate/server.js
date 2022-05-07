// Import Module
const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Use Static file
app.use("/static", express.static("static"));

// Routes
app.use('/', require(path.join(__dirname, "routes/app.js")));
app.use('/about', require(path.join(__dirname, "routes/app.js")));
app.use('/templates', require(path.join(__dirname, "routes/app.js")));
app.use('/recommended', require(path.join(__dirname, "routes/app.js")));
// Routes

// Start Port
app.listen(port, (req, res)=>{
    console.log(`app started successfully on port ${port}`)
})