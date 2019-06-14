const Post = require('../models/Post');

//Códigos assíncronos
//Promisses

module.exports = {
    
    //Controller de listagem
    async index(req, res){
        // O sinal de menos antes do createdAt
        //significa que é ordem decrescente
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    //Controller de armazenar
    async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;
        // console.log(req.body);
        // console.log(req.file);

        // Função que espera (await)
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        });
        return res.json(post);
    }
};