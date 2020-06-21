const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
})  

server.get("/", function(req, res){
    
const about = {
    avatar_url: "https://bit.ly/2XlX2er",
    name: "Walef Campelo",
    role: "Estudante - Rocketseat",
    description: 'Tenho fome de aprender tecnologia! A <a href="https://rocketseat.com.br" target="_blank">Rockeseat</a> é o meu cardápio!',
    links: [
        {name: "Facebook", url: "https://www.facebook.com/walefcamp3lo"},
        {name: "Instagram", url: "https://www.instagram.com/walefcampelo"},
        {name: "Github", url: "https://www.github.com/walefcampelo"}
    ]
}

    return res.render("about", {about})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        if(video.id == id){
            return true 
        }
    })
        if(!video){
            return res.send("Vídeo not found!")
        }

    return res.render("video", { item: video })    
})

server.listen(5000, function(){
    console.log('server is running')
})

