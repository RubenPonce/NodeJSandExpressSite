const express = require('express');
const path = require('path');
const app = express();
const projectData = require('./data.json');
const port =  process.env.PORT || 1337;
app.use('/static', express.static('public'));
//view engine
app.set('view engine','pug');
app.set('views', '/Users/rubenponce/Documents/GitHub/NodeJSandExpressSite/views');
//body parser middleware

//initialize the data array
const data = [];
for (const i in projectData) {
    if (projectData.hasOwnProperty(i)) {
        data.push(projectData[i]);  
    }
}


app.get('/', function(req, res) {
    res.render('index', {data});
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/project:id', function(req, res) {
    let {id} = req.params;
    id = parseInt(id)-1;
    let projectInfo = data[id.toString()];
    
    res.render('project',{projectInfo});
});

app.use((req,res,next)=>{
    const err = new Error('The page you are looking for does not exist');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.locals.error = err;
    res.status(err.status)
   
    res.render('error');
  
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
