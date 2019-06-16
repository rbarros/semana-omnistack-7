# Instarocket

# [Semana Omnistack 7](https://rocketseat.com.br/week-7/aulas)
Semana OmniStack 7.0 - Rocketseat :rocket:

Possívelmente o link *não estará* funcionando após domingo 16/06.

## Aula01 - Ambiente de desenvolvimento 10/06/2019
Nessa aula você vai deixar seu ambiente de desenvolvimento otimizado para a OmniStack

### Node JS
https://nodejs.org/en/

### Gerenciador de pacotes
https://yarnpkg.com/pt-BR/

### Ambiente de Desenvolvimento

Customizando o VS Code
Tema Dracula Official
RocketseatJS
Rocketseat React Native
Material Icon Theme

Fonte Fira Code
https://github.com/tonsky/FiraCode
Ctrl Shift P
settings 
Open settings (JSON)
```
    //Ícones para as extensões
    "workbench.iconTheme": "material-icon-theme",

    //Tamanho e Família da fonte
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,

    //Aplicação de linha vertical para quebrar linha em códígos muito grandes
    "editor.rulers": [80,120],
    "editor.formatOnSave": false,
    "workbench.startupEditor": "newUntitledFile"
```
## Aula02 - Criando a base da aplicação 11/06/2019
Nessa aula você vai construir o back-end da sua aplicação: uma API utilizando NodeJS

Github de mais um que está acompanhando
[fawkes](https://github.com/fawkesguii/insta-omnistack)

Criação da pasta backend
```
mkdir backend
cd backend
yarn init -y
yarn add express
```

Para iniciar a aplicação
na pasta backend, rodar:
```node sr/index.js```

### Nodemon
Adicionar o nodemon
```yarn add nodemon -D```
E então para executar, vai ficar monitorando mudanças no inde.js
```yarn dev```

### Mongodb
#### [MongoDB Atlas](https://cloud.mongodb.com)


Cria um cluster e conecta!
instarocket OG9PwoHvDrI7OGlf

Conect your application
mongodb+srv://instarocket:<password>@cluster0-v8wd5.mongodb.net/test?retryWrites=true&w=majority

yarn add mongose

### [Imsonia](https://insomnia.rest/)
REST Client para debug

Cria uma pasta para os recursos.
Novo request

Create  POST    Multipart

Teste com imagem

Adiciona nova rota.
http://localhost:3333/posts

Após feito o sistema de post, 
é hora de fazer de listagem de dados.

List GET
http://localhost:3333/posts

Para testar o Like
http://localhost:3333/posts/'idpost'/like
http://localhost:3333/posts/5d03aaf3b8454428b8748f6f/like

### Multer
./backend/yarn add multer

dependência que lida com o post de multipart/form-data 
e automatiza o upload de arquivos.

### Sharp
./backend/yarn add sharp

dependência que ajuda a trabalhar com imagens, para redimensionar.

### cors
./backend/yarn add cors

Permite acesso de qualquer aplicação ao backend

### Socket.io
./backend/yarn add socket.io

Permite o protocolo io além do http


