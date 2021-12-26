const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   name:{type:String},
   email:String,
   date:{type:Date ,default:Date.now}
  });

  var Usermodel = mongoose.model('User', userSchema);




  var user2=new Usermodel({name:'bio',email:'bia@gmail.com'})
 