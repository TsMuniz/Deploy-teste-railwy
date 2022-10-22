import express from "express";
import 'dotenv/config'
const {PORT} = process.env

console.log(PORT);

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.status(201).json({ola: "mundo"}))
app.get('/teste', (req, res) => res.sendStatus(404))

app.listen(PORT, () => "rodando na 5000")