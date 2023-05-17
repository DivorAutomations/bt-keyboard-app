const express = require('express')
const app = express()


const mainRoutes = require('./routes/main')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/',mainRoutes)

app.listen(8000, () => {
    console.log("On port 8000")
})