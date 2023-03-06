const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const esp32Routes = require("./routes/esp32");

const app  = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', esp32Routes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

//mongodb connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log(error));

app.listen(port, () => console.log('server listening on port', port));