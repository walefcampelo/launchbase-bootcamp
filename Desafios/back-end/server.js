const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const portfolio = require('./data')

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    const data = {
        avatar_url: "https://bit.ly/2XlX2er",
        name: "Walef Campelo",
        role: "Desenvolvedor Web",
        description: "Esse site tem a intenção de divulgar um conteúdo pessoal para contato social e profissional. Sou desenvolvedor Web. Sempre a procura de um teclado para digitar.",
        links: [
            
            {name:"Instagram", url: "https://www.instagram.com/walefcampelo"},
            {name:"Github", url: "https://www.github.com/walefcampelo"}
        ]
    }

    return res.render("about", {data})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function(){
    console.log('server is running')
})
