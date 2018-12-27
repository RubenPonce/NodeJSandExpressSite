const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    const err = new Error('The page you are looking for does not exist');
    err.status = 404;
    next(err);
});

router.use((err,req,res,next)=>{
    res.locals.error = err;
    res.status(err.status)
    res.render('error.pug');
});
module.exports = router; 