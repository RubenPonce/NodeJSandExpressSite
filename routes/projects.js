const express = require('express');
const router = express.Router();


router.get('/project:id', function(req, res, next) {
    const data = req.app.get('data'); 
    let {id} = req.params;
    id = parseInt(id)-1;
    if(id>=0&&id<data.length){
    let projectInfo = data[id.toString()];

    res.render('project',{projectInfo});
    }
    else{
        next();
    }
});
module.exports = router; 