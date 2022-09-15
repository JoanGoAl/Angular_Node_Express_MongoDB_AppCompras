// Imports
const express = require("express");
const mongoose = require('mongoose')

const app = express();
const port = 3000;

require('./src/routes/products.router')(app)

mongoose.connect('mongodb://localhost:27017/appCompras', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port} 🚀`)
})