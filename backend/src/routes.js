const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controlllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

//Ao acessar a rota /posts através do método post
//executa o método store do controller
routes.post('/posts', upload.single('image'), PostController.store);


module.exports = routes;