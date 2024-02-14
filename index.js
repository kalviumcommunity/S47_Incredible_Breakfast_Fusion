const mongoose = require('mongoose')

const CombosSchema = new mongoose.Schema({
    FoodItem1: {
      type: String
    },
    FoodItem2: {
      type: String
    },
    WeirdCombos: { 
      type: String
    },
    Description: {
      type: String
    },
    name: {
      type: String
    }
  });
  
const FoodModel = mongoose.model("List_Of_Food",CombosSchema)
module.exports = FoodModel;

