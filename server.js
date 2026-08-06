const express = require('express')

const app = express()

app.use(express.json())

app.get("/alunos", (req, res) => {
    res.send("Acessando dados da API")
})

app.post("/alunos", (req, res) => {
    res.send("Enviando dados para API")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
