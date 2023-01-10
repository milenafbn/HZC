const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral') //temos que movimentar essa barra lateral para esquerda e direta
botaoMenu.addEventListener('click', () =>{ //quando clicar acontece:
    menu.classList.toggle('menu-lateral--ativo')
})