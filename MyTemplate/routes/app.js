const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/index.html"));
})

router.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/about.html"));
})

router.get('/templates', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/templates.html"));
})

router.get('/recommended', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/recommended.html"))
})

module.exports = router