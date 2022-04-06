const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static('public'))

app.set('view engine', 'hbs')

//rutas
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about'), (req, res) => {
res.render('about')
}

app.listen(3000)