
const usuarios = [
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: { city: "Gwenborough" },
        company: { name: "Romaguera-Crona" }
    },

    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        address: { city: "Wisokyburgh" },
        company: { name: "Deckow-Crist" }
    },

    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        address: { city: "McKenziehaven" },
        company: { name: "Romaguera-Jacobson" }
    },

    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        address: { city: "South Elvis" },
        company: { name: "Robel-Corkery" }
    }
];

const total = document.getElementById("total");

total.textContent = "Total de usuários: " + usuarios.length;

const container = document.getElementById("cards");

for (let i = 0; i < usuarios.length; i++) {

    const card = document.createElement("div");
    card.className = "card";

    const nome = document.createElement("h3");
    nome.textContent = usuarios[i].name;
    card.appendChild(nome);

    const email = document.createElement("p");
    email.textContent = "E-mail: " + usuarios[i].email;
    card.appendChild(email);

    const cidade = document.createElement("p");
    cidade.textContent = "Cidade: " + usuarios[i].address.city;
    card.appendChild(cidade);

    const empresa = document.createElement("p");
    empresa.textContent = "Empresa: " + usuarios[i].company.name;
    card.appendChild(empresa);

    card.addEventListener("click", function () {
        card.classList.toggle("selecionado");
    });

    container.appendChild(card);
}
