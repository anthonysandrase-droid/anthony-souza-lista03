
const formulario = document.getElementById("formulario");
const json = document.getElementById("json");
const tabelaAlunos = document.getElementById("tabelaAlunos");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const dados = new FormData(formulario);

    const aluno = {};

    for (const [chave, valor] of dados) {
        aluno[chave] = valor;
    }

    json.textContent = JSON.stringify(aluno, null, 2);

    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = aluno.nome;
    linha.appendChild(colunaNome);

    const colunaEmail = document.createElement("td");
    colunaEmail.textContent = aluno.email;
    linha.appendChild(colunaEmail);

    const colunaIdade = document.createElement("td");
    colunaIdade.textContent = aluno.idade;
    linha.appendChild(colunaIdade);

    const colunaCurso = document.createElement("td");
    colunaCurso.textContent = aluno.curso;
    linha.appendChild(colunaCurso);

    tabelaAlunos.appendChild(linha);

    mensagem.textContent = "";

    formulario.reset();
});
