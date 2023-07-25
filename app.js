//const exp = require("constants")
const express = require("express")
    //const { dirname } = require("path")
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'hbs')
    // app.set("view", __dirname + "/views")
app.set('views', path.join(__dirname, '/views'))
    // app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, "../public")))
app.get('/', (req, res) => {
    res.render('home', { title: 'home' })
})
app.get('/check-weather', (req, res) => {
    const weateherData = {
        country: "Alexandria",
        latitude: "31.199004",
        longtitude: "29.894378",
        currentWeather: "Sunny",
        temperature: "32c",
    }
    res.render('check-weather', { title: 'check weather', weateherData })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})