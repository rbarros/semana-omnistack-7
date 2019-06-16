const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// Permitir acesso via http
const server = require('http').Server(app);
// Permitir acesso via websocket
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://instarocket:OG9PwoHvDrI7OGlf@cluster0-v8wd5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

//Midleware para qe todos possam usar o io
app.use((req,res, next) => {
    req.io = io; /* Websocket */
    next(); //Gante que todos continuem sendo executados
});

//Qualquer aplicação tem acesso ao backend
app.use(cors());

//Ao acessar a rota files, redireciona para as imagens redimensionadas
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);