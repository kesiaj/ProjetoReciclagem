const acoes = [
    const acoes = [
    "Separar corretamente os resíduos recicláveis.",
    "Reduzir o desperdício de materiais.",
    "Reutilizar materiais sempre que possível.",
    "Economizar energia no ambiente de trabalho.",
    "Incentivar a coleta seletiva.",
    "Descartar resíduos eletrônicos corretamente."
];
]

//renderização dinâmica
const container = document.querySelector('#container-acoes')

for(let i = 0; i < acoes.length; i++ ) {
    const item = acoes[i]
    const div = document.createElement('div');
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <p class="acao-texto">${item.texto}</p>
    `
    container.appendChild(div)
}

const nav = document.querySelector('.menu-navegacao')

window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        nav.style.opacity = '0.5' 
    }else {       
        nav.style.opacity = '1'
    }
});

const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

console.log(msg)

form.addEventListener("submit", (e) => {
        e.preventDefault();
        

        if(form.checkValidity()) {
            const nome = document.getElementById("nome").value
            msg.textContent = `✅ Sucesso, ${nome}! Adesão registrada.`
            msg.className = 'mensagem-retorno sucesso'
            form.reset()
        }else{
            msg.textContent = '❌ Preencha os campos corretamente.';
            msg.className = 'mensagem-retorno erro';
            msg.style.display = 'block';
        }    
    }
)


