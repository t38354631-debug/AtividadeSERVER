const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    const { id, nome, vitorias, empates, derrotas } = req.body;

    // Verifica se os dados foram preenchidos
    if (
        !id ||
        !nome ||
        vitorias === undefined ||
        empates === undefined ||
        derrotas === undefined
    ) {
        return res.status(400).send("Dados inválidos.");
    }

    // Converte os valores para números
    const idNumero = Number(id);
    const vitoriasNumero = Number(vitorias);
    const empatesNumero = Number(empates);
    const derrotasNumero = Number(derrotas);

    // Verifica se os números são válidos
    if (
        isNaN(idNumero) ||
        isNaN(vitoriasNumero) ||
        isNaN(empatesNumero) ||
        isNaN(derrotasNumero)
    ) {
        return res.status(400).send("Dados inválidos.");
    }

    // Calcula a quantidade total de jogos
    const calculoJogos =
        vitoriasNumero + empatesNumero + derrotasNumero;

    // Calcula os pontos
    const pontos =
        (vitoriasNumero * 3)+ empatesNumero;

    console.log("ID:", idNumero);
    console.log("Nome:", nome);
    console.log("Vitórias:", vitoriasNumero);
    console.log("Empates:", empatesNumero);
    console.log("Derrotas:", derrotasNumero);
    console.log("Total de jogos:", calculoJogos);
    console.log("Pontos:", pontos);

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Cadastro de Clubes</title>
        </head>

        <body>
            <h1>Cadastro de Clubes</h1>

            <p><strong>ID:</strong> ${idNumero}</p>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Vitórias:</strong> ${vitoriasNumero}</p>
            <p><strong>Empates:</strong> ${empatesNumero}</p>
            <p><strong>Derrotas:</strong> ${derrotasNumero}</p>
            <p><strong>Total de jogos:</strong> ${calculoJogos}</p>
            <p><strong>Pontos:</strong> ${pontos}</p>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
