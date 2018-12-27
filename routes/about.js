const express = require('express');
const router = express.Router();

router.get('/about', function(req, res) {
    const data = req.app.get('data');
    res.render('about');
});
module.exports = router; 

