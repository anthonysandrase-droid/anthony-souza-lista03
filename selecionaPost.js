
const posts = [
    { id: 1, title: "Introdução ao DOM" },
    { id: 2, title: "Eventos em JavaScript" },
    { id: 3, title: "O que é uma API?" }
];

const comentarios = [
    {
        postId: 1,
        id: 1,
        name: "Ana",
        email: "ana@email.com",
        body: "Explicação muito clara!"
    },
    {
        postId: 1,
        id: 2,
        name: "Bruno",
        email: "bruno@email.com",
        body: "Gostei do exemplo do getElementById."
    },
    {
        postId: 2,
        id: 3,
        name: "Carla",
        email: "carla@email.com",
        body: "addEventListener é bem melhor que onclick."
    },
    {
        postId: 3,
        id: 4,
        name: "Diego",
        email: "diego@email.com",
        body: "A analogia do garçom ajudou muito."
    },
    {
        postId: 3,
        id: 5,
        name: "Elisa",
        email: "elisa@email.com",
        body: "Quero testar o JSONPlaceholder!"
    },
    {
        postId: 3,
        id: 6,
        name: "Fábio",
        email: "fabio@email.com",
        body: "E o método POST, como funciona?"
    }
];

const selectPost = document.getElementById("post");
const areaComentarios = document.getElementById("comentarios");
const tituloComentarios = document.getElementById("tituloComentarios");

// Criar as opções do select
for (let i = 0; i < posts.length; i++) {
    const opcao = document.createElement("option");

    opcao.value = posts[i].id;
    opcao.textContent = posts[i].title;

    selectPost.appendChild(opcao);
}

// Detectar quando o usuário trocar o post
selectPost.addEventListener("change", function () {

    const idPost = Number(selectPost.value);

    areaComentarios.innerHTML = "";

    if (selectPost.value === "") {
        tituloComentarios.textContent = "Comentários (0)";
        return;
    }

    // Filtrar os comentários do post selecionado
    const comentariosFiltrados = comentarios.filter(function (comentario) {
        return comentario.postId === idPost;
    });

    // Atualizar o título com a quantidade de comentários
    tituloComentarios.textContent =
        "Comentários (" + comentariosFiltrados.length + ")";

    // Criar um card para cada comentário encontrado
    for (let i = 0; i < comentariosFiltrados.length; i++) {

        const comentario = comentariosFiltrados[i];

        const card = document.createElement("div");
        card.className = "comentario";

        const nome = document.createElement("h3");
        nome.textContent = comentario.name;
        card.appendChild(nome);

        const email = document.createElement("p");
        email.textContent = "E-mail: " + comentario.email;
        card.appendChild(email);

        const texto = document.createElement("p");
        texto.textContent = comentario.body;
        card.appendChild(texto);

        areaComentarios.appendChild(card);
    }
});