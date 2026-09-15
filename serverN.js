const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {

const { id, nome, peso, altura, dataConsulta } = req.body;

const pesoCliente = Number(peso);
const alturaCliente = Number(altura);

// Verifica se os valores são válidos
if (
    !id ||
    !nome ||
    !dataConsulta ||
    isNaN(pesoCliente) ||
    isNaN(alturaCliente) ||
    pesoCliente <= 0 ||
    alturaCliente <= 0
) {
    return res.status(400).send("Dados inválidos.");
}

// Cálculo do IMC
const calculoIMC = pesoCliente / (alturaCliente * alturaCliente);

console.log("ID:", id);
console.log("Nome:", nome);
console.log("Peso:", pesoCliente);
console.log("Altura:", alturaCliente);
console.log("Data da consulta:", dataConsulta);
console.log("IMC:", calculoIMC.toFixed(2));

res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Consulta Agendada</title>
    </head>

    <body>
        <h1>Consulta agendada!</h1>

        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Paciente:</strong> ${nome}</p>
        <p><strong>Peso:</strong> ${pesoCliente} kg</p>
        <p><strong>Altura:</strong> ${alturaCliente} m</p>
        <p><strong>Data:</strong> ${dataConsulta}</p>
        <p><strong>IMC:</strong> ${calculoIMC.toFixed(2)}</p>
    </body>
    </html>
`);


});

app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000");
});