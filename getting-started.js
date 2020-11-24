//const is just another let 
//we declare a constant variable called mongoose
//we set it equal to the return value of require('mongoose'); 
const mongoose = require('mongoose'); 
//access the connect method of the mongoose object
//pass in the localhost test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
//make another constant variable called db
//and we set it equal to the connection property of our mongoose object 
const db = mongoose.connection;
//but then we acces the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
    /* schema  */
    const kittySchema = new mongoose.Schema({
        name : { type:String, required: true, maxlength: 25} 
    }); 
    kittySchema.methods.speak = function(){
        let greeting; 
        if(this.name){
            greeting = "Meow name is " + this.name; 
        }
        else {
            greeting = "I don't have a name"; 
        }
        console.log(greeting); 
    }
    /* model */ 
    const Kitten = mongoose.model('Kitten', kittySchema); 
    /* document*/ 
    const silence = new Kitten({ name : "Silence" }); 
    silence.speak(); 
    const fluffy = new Kitten({name : "fluffy"}); 
    fluffy.speak(); 
    
fluffy.save(function(err, cat){
    if (err) return console.error(err);
    cat.speak();
}


