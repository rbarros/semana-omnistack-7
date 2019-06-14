//Copiado do PostController pois é igual mas sem a listagem
const Post = require('../models/Post');

//Códigos assíncronos
//Promisses

module.exports = {
    
    //Controller de armazenar o Like
    async store(req, res){
        
        return res.json({ok: true});/* Para testar */
    }
};