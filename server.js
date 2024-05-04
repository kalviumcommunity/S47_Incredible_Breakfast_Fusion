const express = require('express');
const app = express();
const port =5000;
const mongoose = require('mongoose');

const uri= 'mongodb+srv://anushka_poonia:anushkapoonia3777@cluster0.rniykvz.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri)
.then(()=>{
  app.get("/",(req,res)=>{
    res.json({connection:"Connected"})
  })
})

.catch(()=>{
  app.get("/",(req,res)=>{
    res.json({connection:"Not Connected"})
  })
})
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });