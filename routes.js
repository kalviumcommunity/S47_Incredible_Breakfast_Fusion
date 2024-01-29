const express = require('express');
const app = express();
const port = 7000;

const data = [
  {
    ID:1,
    FoodItem1:"Chocolate",
    FoodItem2:"Ketchup",
    WeirdCombos:"Chocolate and Ketchup",
    Description:"Eat dipped chocolate in ketchup."
  },
];

app.use(express.json());

app.get('/', (req, res) => {
    res.json(data)
});

app.post('/', (req, res) => {
    const create = req.body;
    data.push(create);
    res.json(data)
})

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const update = req.body;
    data[index] = update;
    res.json(data);
});

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    data.splice(index, 1);
    res.json(data);
});

app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });

module.exports = app;