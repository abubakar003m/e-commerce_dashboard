/* ****************************
connection with database
*******************************/
const mongoose = require('mongoose');
// mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
 const db = "mongodb+srv://abubakar003m:abubakar12@cluster0.sfw3z3e.mongodb.net/e-commerce"; // Replace with your actual connection string
mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("sucess")
}).catch((err)=>{
    console.log("no connection")
})





