const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://instarocket:OG9PwoHvDrI7OGlf@cluster0-v8wd5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

//Ao acessar a rota files, redireciona para as imagens redimensionadas
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);