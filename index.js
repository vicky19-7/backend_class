const express = require('express');
const mongoose = require ('mongoose');

const compass_string = 'mongodb://localhost:27017/cohort8_db'
const atlas_string = 'mongodb+srv://victoriaigbonoba_db_user@cluster0.4rir4ys.mongodb.net/cohort8_db?appName=Cluster0'

mongoose.connect(atlas_string)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('Connection Error: ', err));


const app = express();
const port = 5555;


app.use(express.json())

app.get("/", (req,res) => {
    res.send('Server is active!')
});

app.listen(port, () => {
    console.log(`Server is up and running on port : ${port}`);
});

