const express = require('express');
const path = require('path');
const app = express();
const projectData = require('./data.json');

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
console.log(data[0].image_url);

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/project:id', function(req, res) {
    console.log(req.params);
    const {id} = req.params;
    const projectInfo = data[id]

    res.render('project',{projectInfo});
});


// app.get('/index', function(req, res) {
//     res.render('index');

// });
// app.get('/project', function(req, res) {
//     res.render('project');

// });
// app.get('/about', (req, res) => {
//     res.render('about');
// });


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
