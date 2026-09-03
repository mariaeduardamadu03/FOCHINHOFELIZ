const botaoMenu = document.getElementById("botao-menu");
const menu = document.querySelector("nav");
 
// 2) Escuta o evento de clique no botão
// 3) Reage alternando a classe "menu-aberto" no <nav>
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-aberto");
});