const express = require('express');

const app = express();

//Rota
app.get('/', (req, res) => {

    //Retornando uma resposta
    return res.send(`Helo World ${req.query.name}.`);
});

app.listen(3333);