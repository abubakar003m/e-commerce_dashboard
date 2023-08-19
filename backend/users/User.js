const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User = mongoose.model('users', userSchema);
module.exports=User


// const uniqueValidator=require('mongoose-unique-validator')
 // email:{type:String,required:true,unique:true},
 // const Duplicate=userSchema.plugin(uniqueValidator,{message:'{PATH} is already exist'})
// module.exports=Duplicate;