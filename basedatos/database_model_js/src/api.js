var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentModel = require('./dbschema');
 
// Connecting to database
var query = 'mongodb+srv://Usuario:1234@dbmintic.ljlqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
 
module.exports = router;

