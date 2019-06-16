const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path'); /* Padráo Node para lidar com arquivos */
const fs = require('fs'); /* Padrão Node para lidar com sistema de arquivos*/

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
        
        //Debugar e ver o que tem no req.file, via REST Insomnia
        // return res.json(req.file);

        //Redimensionamento da imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', image)
            );
        
        // Apagando a imagem original, deixando apenas a redimensionada
        fs.unlinkSync(req.file.path);

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