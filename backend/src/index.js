const express = require('express');

const app = express();

//Rota
app.get('/', (req, res) => {
    return res.send('Helo World');
});

app.listen(3333);