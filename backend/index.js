const express=require('express');
 const cors = require("cors")
const productRoutes = require('./products/productRoutes');
const userRoutes=require('./users/userRoutes')
require('./config');
const app=express();
app.use(express.json());
app.use(cors());

app.use(userRoutes)
/* ****************************
product api
*******************************/
app.use(productRoutes)
/* ****************************
connect with server
*******************************/
app.listen(5000,()=>{
    console.log("Server is running in port 5000")
})