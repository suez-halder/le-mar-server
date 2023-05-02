const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

const chefsData = require('./data/chefs.json')
// console.log(chefs);

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chefs are Cooking!')
})

// Get all chefs
app.get('/chefs', (req, res) => {
    res.send(chefsData.chefs);
});

// Get a single chef by ID
app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefsData.chefs.find(c => c.id === id);
    if (!chef) {
        res.status(404).send(`Chef with ID ${id} not found`);
    } else {
        res.send(chef);
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})