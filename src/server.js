const express = require('express');
const connectDB = require('./config/connectDB');
const initWebRoute = require('./routes/web');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(express.json())

initWebRoute(app);

app.listen(port, function () {
    console.log(`Port on ${port}`)
})

