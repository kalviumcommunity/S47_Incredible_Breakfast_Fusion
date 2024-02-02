const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const uri = 'mongodb+srv://anushka_poonia:anushkapoonia3777@cluster0.rniykvz.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('Food_DataBase');
    const collection = database.collection('List_Of_Food');

    app.get('/', async (req,res)=>{
    const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});