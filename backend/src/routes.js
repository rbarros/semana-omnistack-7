const express = require('express');

const routes = new express.Router();

//Rota Express para routes
routes.get('/', (req, res) => {
    //Retornando uma resposta
    return res.send(`Olá Mundo ${req.query.name}.`);
});

module.exports = routes;