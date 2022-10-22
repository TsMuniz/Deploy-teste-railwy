import express from "express";

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.status(201).json({ola: "mundo"}))

app.listen(5000, () => "rodando na 5000")