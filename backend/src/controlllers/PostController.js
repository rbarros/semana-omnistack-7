const Post = require('../models/Post');

//Códigos assíncronos
//Promisses

module.exports = {
    
    //Rota de listagem
    async index(req, res){
        
    },

    //Rota de armazenar
    async store(req, res){
        console.log(req.body);
        console.log(req.file);
        return res.json({ ok: true });

    }

};