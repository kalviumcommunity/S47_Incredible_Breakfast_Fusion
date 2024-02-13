const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const FoodModel = require('./index')
const port = 3000;
const joi = require('joi')

require('dotenv').config()
app.use(cors())
app.use(express.json())

const updateSchema=joi.object({
  FoodItem1:joi.string().required(),
  FoodItem2:joi.string().required(),
  WeirdCombos:joi.string().required(),
  Description:joi.string().required()
})


const uri = process.env.MONGODB_URI
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.get('/',(req,res)=>{
      FoodModel.find({})
      .then(combos => res.json(combos))
    })
app.delete('/deleteUser/:id', (req,res)=>{
  let id = req.params.id
  FoodModel.findByIdAndDelete({_id:id})
  .then(food => res.json(food))
  .catch(err => console.log(err))
})

app.post('/Weird_combos', (req,res)=>{
  const { error, value } = updateSchema.validate(req.body);
  
  if (error){
    console.log(error.details);
    return res.status(400).json({ error: error.details[0].message }); 
  } else {
    let { FoodItem1, FoodItem2, WeirdCombos, Description } = req.body;
    FoodModel.create({ FoodItem1, FoodItem2, WeirdCombos, Description })
    .then(food => res.json(food))
    .catch(err => console.log(err));
  }
});

    
    app.get('/getUser/:id', (req,res)=>{
      let id = req.params.id
      FoodModel.findById({_id:id})
      .then(food => res.json(food))
      .catch(err => console.log(err))
    })

    app.put('/UpdateFood/:id', (req,res)=>{
      let id = req.params.id
      let { FoodItem1, FoodItem2, WeirdCombos, Description } = req.body
    
      FoodModel.findByIdAndUpdate({ _id: id }, { FoodItem1, FoodItem2, WeirdCombos, Description }, { new: true })
      .then(food => res.json(food))
      .catch(err => console.log(err))
    })    
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
