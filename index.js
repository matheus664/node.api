const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/Person')

// forma  de ler JSON / MIDDLEWARES

app.use(express.urlencoded({

    extended: true,
}),
)

app.use (express.json())

//rota da API

app.post('/person',async (req,res) => {

//req.body
const {name,salary,approved} = req.body
//{name:'Matheus", salary: 5000, approved:false}

const person = {

    name,
    salary,
    approved,
}

//create 

try {
    //criando dados
    await Person.create(person)
    res.status(201).json({message:'Pessoa inserida com sucesso!'})

} 

catch(error) {
    res.status(500).json({error:error})
}


})



// ROTA INICIAL

app.get('/', function (req,res)  {
//mostrar requisicao
    res.json({Message:'HELLO WORLD!, this server and package JSON, it is ONLINE!'})

    res.status(200).send('this server is Online!')
    res.status(404).send('Deny acess')
})



mongoose.connect('mongodb+srv://matheuslopez:tecnica@apicluster.osojwxo.mongodb.net/?retryWrites=true&w=majority')

.then(() => {
console.log('Conectamos ao MongoDB!')
//app.listen(3001)

})

//.catch((err) => console.log(err)) 

// ENTREGAR PORTA PARA ACESSAR A API
app.listen(3000)

