const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const data = req.app.get('data');
    res.render('index',{data});
});
module.exports = router; 