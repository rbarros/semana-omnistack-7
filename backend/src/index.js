const express = require('express');

const app = express();

//Rota Express
app.get('/', (req, res) => {

    //Retornando uma resposta
    return res.send(`Olá Mundo ${req.query.name}.`);
});

app.listen(3333);