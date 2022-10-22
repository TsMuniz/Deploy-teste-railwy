import express from "express";
import 'dotenv/config'
const {PORT} = process.env

console.log(PORT);

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.status(201).json({ola: "mundo"}))
app.get('/teste', (req, res) => res.status(200).json({teste: "testando alguma coisa agora"}))

app.listen(PORT, () => "rodando na 5000")