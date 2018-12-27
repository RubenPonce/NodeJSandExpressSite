const express = require('express');
const router = express.Router();


router.get('/project:id', function(req, res) {
    const data = req.app.get('data');
    let {id} = req.params;
    id = parseInt(id)-1;
    let projectInfo = data[id.toString()];
    res.render('project',{projectInfo});
});
module.exports = router; 