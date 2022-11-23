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
    const modelshema =  {
        "name":"string",
        "lastname":"string",
        "email":"string",
        "password":"string",
        "password_confirmation":"string"
    }
    const schema = new mongoose.Schema(modelshema);
    const users = mongoose.model('users', schema);
    const user = new users({
        'name':req.body.name,
        'lastname':req.body.lastname,
        'email':req.body.email,
        'password':req.body.password,

    })
    user.save((error)=>{
        if(error !== null){
            console.log("error de registro de usuario",error)
        }
       
        res.json(user)
    })
    
}) 
mongoose.connect(DB_URI).then((client)=>{
    console.log("Conexion a base de datos satisfactoria")

}).catch((error)=>{
    console.log("error de conexion ")
})


app.listen(3000)


