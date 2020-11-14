const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})


app.post('/', function(req, res) {
    res.send("TOTAL IS " + (Number(req.body.num1) + Number(req.body.num2)))
})


app.get('/bmicalcu', function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html")
})


app.post('/bmicalcu', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("your BMI is " + bmi);
})


app.listen(port, function() {
    console.log(`port is running`)
})