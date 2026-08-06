const express = require('express')

const app = express()

app.use(express.json())

app.get("/alunos", (req, res) => {
    console.log("Acessando dados da API")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
