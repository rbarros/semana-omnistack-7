const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://instarocket:OG9PwoHvDrI7OGlf@cluster0-v8wd5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

//Rota Express
app.get('/', (req, res) => {

    //Retornando uma resposta
    return res.send(`Olá Mundo ${req.query.name}.`);
});

app.listen(3333);