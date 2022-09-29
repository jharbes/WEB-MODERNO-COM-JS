const porta=3003

const express=require('express')
const app=express()
const bancoDeDados=require('./bancoDeDados')

app.get('/produtos',(req,res,next)=>{
    res.send({nome:'Notebook',preco:123.45}) // Converter para JSON
})

app.listen(porta,()=>{
    console.log(`Servidor está executando na porta ${porta}.`)
})