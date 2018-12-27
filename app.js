const express = require('express');
const app = express();
const projectData = require('./data.json');
const PORT =  process.env.PORT || 5000;
//route interaction
const index = require('./routes/index');
const about = require('./routes/about');
const project = require('./routes/projects');
const error = require('./routes/error');

//view engine and static folder at 'public'
app.use('/static', express.static('public'));
app.set('view engine','pug');
app.set('views', '/Users/rubenponce/Documents/GitHub/NodeJSandExpressSite/views');

//initialize the data array
const data = [];
for (const i in projectData) {
    if (projectData.hasOwnProperty(i)) {
        data.push(projectData[i]);  
    }
}

//be able to call template data from routes
app.set('data',data);

//route to directories
app.use(index);
app.use(about);
app.use(project);
app.use(error);


app.listen(PORT, () => {
    console.log(`The application is running on port ${PORT}`);
});
