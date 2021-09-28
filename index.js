var mongoose = require('mongoose');
var express = require('express');
const app = express();
require('dotenv').config()


const cors = require('cors');
app.use(cors());

app.use(express.json());

var PORT = process.env.PORT || 3001;
 
// Connecting to database
var query = process.env.ATLAS_DATABASE;
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
 
const connection = mongoose.connection
connection.once('open', () => {
  console.log("DB connected");
});

app.get('/', async (req, res) =>{
    res.status(200).json("App is running correct! - Grupo 1 Equipo 4")
});

app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
});

const studentRoutes = require('./src/controllers/student_controller');

app.use('/students', studentRoutes);
