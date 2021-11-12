const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/profolio', (req, res) => {
  res.render('profolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})