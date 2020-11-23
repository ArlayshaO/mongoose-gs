
//const is just another let
//we declared a constant variable called mongoose
//we set it equal to the return value of required('mongoose');
const mongoose = require('mongoose'); 


//access the connect method of the mongoose object
//pass in the local host test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

//make another constant variable called db
//and we set it equal to the connection property of our project
const db = mongoose.connection;

//but then we access the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
});

