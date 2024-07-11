/*  Logica do nosso site
O que precisamos fazer? - quando clicar no botão do presonagem na lista, temos que 
marcar o botão selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como
    selecionado
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar
        em cima de um deles
        
        passo 2 - adicionar a class "selecionado" no botão que o usuário clicou
        
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover
        a seleção dele

OBJEIVO 2 - quand clicar no botão do personagem mostrar as informações do personagem
    passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele 

    passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou

    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover
    a seleção dele

//OBJETIVO 1 passo 1
// const botoes = document.querySelectorAll('.botao') /*Estamos criando uma variavel botao e colocando document. Para pegar/dar acesso no html
// querySelectorAll para selecionar todos da class que queremos no caso ('.botao') quando se trata de classe temos sempre que colocar um .e o nome da class
// */

// //OBJETIVO 2 passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
// const personagens = document.querySelectorAll(".personagem");/*Estamos criando uma variavel personagens e colocando document. Para pegar/dar acesso no html
// querySelectorAll para selecionar todos da class que queremos no caso ('.personagem') quando se trata de classe temos sempre que colocar um .e o nome da class
// */

// // OBJETIVO 1 passo 1 / 2
// botoes.forEach((botoa, indice) => { /*forEatch = para cada ele vai percorer a lista ex. para cada botao ele vai executar um código */
//     botoa.addEventListener("click", () => { /*addEventListener é um metodo tbm porem ele aceita um argumento ("click", (colocando a , () => estamos dizerndo que temos mais que um argumento)) para ele aceitar mais que um devemos 
// fazer o forEatch */

// //OBJETIVO 1 passo 3
//         const botaoselecionado = document.querySelector(".botao.selecionado");/*Usando o quereSelector estmos pegando apenas um dos botoes que queremos nesse caso o botao selecionado */
//         botaoselecionado.classList.remove("selecionado") /*Aqui estamos removendo uma a classe do botao clicado no caso selecionado que colocamos em um dos botões no html vamos remover para ele passar selecionado para o botao qui clicamos */

// /*OBJETIVO 2 passo 3*/
//     const personagemSelecionado = document.querySelector(".personagem.selecionado");
//     personagemSelecionado.classList.remove("selecionado");


// //OBJETIVO 2 passo 2
//         botoa.classList.add("selecionado");/*Aqui estamos adicionando uma classe nova ao botao clicado no caso class selecionado que colocamos em um dos botões no html */

//         personagens[indice].classList.add("selecionado");    
//     });
// });


const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botoa, indice) => {
    botoa.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botoa.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

