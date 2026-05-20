/* Criando as variaveis */
let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.header .navbar');
/* Função de quando clicar no menu aparecer o menu */
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/* Função para quando scrollar desaparecer o menu */
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
/* Função para abrir e fechar o modal box */
function openModal(id){
    document.getElementById(id).style.display = "block";
}
function closeModal(id){
    document.getElementById(id).style.display = "none";
}
/* Função para enviar a mensagem via WhatsApp */
document.getElementById('forms').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('text').value;
    const number = '5584991090634';
    const text = `Olá! Meu nome é ${name}.\n${message}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
});
/* Função para mudar os textos dos cards de dicas */
const dicas = [
    "Desenvolva a coragem de ser imperfeito, é libertador.",
    "Tudo muda quando você muda.",
    "O mundo é como você o enxerga.",
    "Acredite, vai passar!",
    "Ninguém está condenado a ser o que sempre foi.",
    "Revise seus modelos mentais.",
    "Aceite o desconforto do crescimento.",
    "Permita-se recomeçar sem culpa.",
    "Pensamentos não são fatos.",
    "Você não controla tudo — e tudo bem.",
    "Não espere estar 100% pronto para agir.",
    "Seja gentil com você mesmo, todos os dias."
];
function mostrar_dica(element,index){
    const back = element.querySelector('.back h3');
    back.innerText = dicas[index];
    element.classList.toggle('flip');
}