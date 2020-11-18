//sercidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, pageSucess, saveClasses} = require('./pages')

const nunjucks = require('nunjucks')

// configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquicos estáticos (css, scripts, imagem)
.use(express.static('public'))
//rota da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.get('/page-sucess', pageSucess)
.post('/save-classes-sucess', pageSucess)
.post('/save-classes',  saveClasses)
//abrindo a porta para acessar o site
.listen(5500)
