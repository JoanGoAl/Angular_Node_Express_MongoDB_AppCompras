const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors())

app.use(require('./src/routes'))

mongoose.connect('mongodb://localhost:27017/appCompras', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port} 🚀`)
})