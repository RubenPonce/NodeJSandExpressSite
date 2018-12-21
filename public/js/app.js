const express = require('express');

const app = express();

app.set('views', '/Users/rubenponce/Documents/GitHub/NodeJSandExpressSite/views');
app.set('view engine','pug');

app.get('/', (req, res) => {
    res.render('about');
    console.log('hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});