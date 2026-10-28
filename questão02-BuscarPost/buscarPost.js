
const posts = [
    {
        userId: 1,
        id: 1,
        title: "Primeiro post",
        body: "Aprendendo a manipular o DOM."
    },

    {
        userId: 1,
        id: 2,
        title: "Segundo post",
        body: "Arrays de objetos são parecidos com o JSON de uma API."
    },

    {
        userId: 2,
        id: 3,
        title: "Terceiro post",
        body: "Em breve vamos buscar estes dados no servidor."
    },

    {
        userId: 2,
        id: 4,
        title: "Quarto post",
        body: "O método find devolve o primeiro item encontrado."
    },

    {
        userId: 3,
        id: 5,
        title: "Quinto post",
        body: "Se nada for encontrado, find devolve undefined."
    }
];

const campoId = document.getElementById("idPost");
const botaoBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

botaoBuscar.addEventListener("click", function () {

    const valor = campoId.value;

    resultado.innerHTML = "";

    if (valor === "") {
        resultado.textContent = "Digite um ID.";
        resultado.className = "erro";
        return;
    }

    const id = Number(valor);

    const postEncontrado = posts.find(function (post) {
        return post.id === id;
    });

    if (postEncontrado) {

        resultado.className = "";

        const titulo = document.createElement("h2");
        titulo.textContent = postEncontrado.title;

        const corpo = document.createElement("p");
        corpo.textContent = postEncontrado.body;

        resultado.appendChild(titulo);
        resultado.appendChild(corpo);

    } else {

        resultado.className = "erro";

        resultado.textContent =
            "Post não encontrado (ID " + id +
            "). Os IDs válidos vão de 1 a 5.";
    }
});
