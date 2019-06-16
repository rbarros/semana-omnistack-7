//Copiado do PostController pois é igual mas sem a listagem
const Post = require('../models/Post');

//Códigos assíncronos
//Promisses

module.exports = {
    
    //Controller de armazenar o Like
    async store(req, res){
        // Pegar o id do post no BD
        const post = await Post.findById(req.params.id);

        post.likes += 1;
        
        await post.save();
        
        return res.json(post);/* Para testar */
    }
};