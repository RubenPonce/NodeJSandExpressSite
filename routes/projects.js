const express = require('express');
const router = express.Router();

router.get('/project', function(req, res) {
    res.render('project',{data});
});