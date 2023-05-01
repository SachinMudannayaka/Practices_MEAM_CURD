require ('dotenv').config();
const express=require('express');
const app=express();
const employeeRoutes= require('./routes/employee');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.use(employeeRoutes);


app.get('/',(req,res)=>{
    res.send('<h1>Hi there Angular by Sachiya</h1>');
})

const PORTNO=process.env.PORT;
const MURL=process.env.DBURL;

mongoose.connect(MURL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    console.log('Database Successfully connected!'))
.catch((err)=>{
    console.log(err);
})

app.listen(PORTNO,()=>{
console.log(`SERVER IS RUNNIG ON PORT-: ${PORTNO}`);
})
