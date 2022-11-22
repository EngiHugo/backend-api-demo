const express = require('express')
const app = express()
const mongoose = require('mongoose');
const DB_URI = 'mongodb://127.0.0.1:27017/test'

app.use(express.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})
// POST method route
app.post('/register', (req, res) => {
    console.log(req.body)
    res.json(req.body)
}) 
mongoose.connect(DB_URI).then((client)=>{
    console.log("Conexion a base de datos satisfactoria")

}).catch((error)=>{
    console.log("error de conexion ")
})


app.listen(3000)


