const acoes = [
    {
        icone: "♻️",
        texto: "Separar corretamente os resíduos recicláveis."
    },
    {
        icone: "🌱",
        texto: "Reduzir o desperdício de materiais."
    },
    {
        icone: "🔄",
        texto: "Reutilizar materiais sempre que possível."
    },
    {
        icone: "⚡",
        texto: "Economizar energia no ambiente de trabalho."
    },
    {
        icone: "🗑️",
        texto: "Incentivar a coleta seletiva."
    },
    {
        icone: "💻",
        texto: "Descartar resíduos eletrônicos corretamente."
    }
];

// Renderização dinâmica dos cards
const container = document.querySelector('#container-acoes');

for (let i = 0; i < acoes.length; i++) {

    const item = acoes[i];

    const div = document.createElement('div');

    div.className = "acao-item";

    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <p class="acao-texto">${item.texto}</p>
    `;

    container.appendChild(div);
}

// Efeito de transparência no menu
const nav = document.querySelector('.menu-navegacao');

window.addEventListener('scroll', () => {

    if (window.scrollY > 10) {
        nav.style.opacity = '0.8';
    } else {
        nav.style.opacity = '1';
    }

});

// Formulário
const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (form.checkValidity()) {

            const nome = document.getElementById("nome").value;

            msg.textContent = `✅ Sucesso, ${nome}! Participação registrada.`;

            msg.className = 'mensagem-retorno sucesso';

            form.reset();

        } else {

            msg.textContent = '❌ Preencha os campos corretamente.';

            msg.className = 'mensagem-retorno erro';

            msg.style.display = 'block';
        }

    });

}