const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Inside a middleware');
    next(); // Allows request to go to the next middleware inline
})

app.use((req, res, next) => {
    console.log('Inside another middleware');
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000);