//GERAL TABELA
let tamanho = 5;


for (let indexL = 0; indexL < tamanho; indexL += 1) {
    let linhaTabela = document.createElement("div");
    document.getElementById("pixel-board").appendChild(linhaTabela);
    linhaTabela.classList.add("linhaTabela");
    for (let indexC = 0; indexC < tamanho; indexC += 1) {
        let colunaTabela = document.createElement("div");
        linhaTabela.appendChild(colunaTabela);
        colunaTabela.classList.add("pixel");
    }
    
}

window.onload = function(){
    //SELECIONA PRIMEIRA COR
    let corInicial = document.getElementById("primeiraCor")
    corInicial.classList.add("selected")
    document.getElementById("segundaCor").classList.remove("selected")
    document.getElementById("terceiraCor").classList.remove("selected")
    document.getElementById("quartaCor").classList.remove("selected")

    
}
//SELECIONA COR E DESATIVA AS OUTRAS
let primeiro = document.getElementById("primeiraCor");
let segundo = document.getElementById("segundaCor");
let terceiro =document.getElementById("terceiraCor");
let quarto = document.getElementById("quartaCor");
function colorChangeBlack() {
    segundo.classList.remove("selected")
    terceiro.classList.remove("selected")
    quarto.classList.remove("selected") 
    primeiro.classList.add("selected")
}
function colorChangeRed() {
    primeiro.classList.remove("selected")
    terceiro.classList.remove("selected")
    quarto.classList.remove("selected") 
    segundo.classList.add("selected")
}
function colorChangeBlue() {
    primeiro.classList.remove("selected")
    segundo.classList.remove("selected")
    quarto.classList.remove("selected")
    terceiro.classList.add("selected")
}
function colorChangeGreen() {
    primeiro.classList.remove("selected")
    terceiro.classList.remove("selected")
    segundo.classList.remove("selected") 
    quarto.classList.add("selected")
}

function colorThePixel(event) {
    let elementoClicado = event.target;
    let selecionado = document.querySelector(".selected");
    let style = window.getComputedStyle(selecionado);
    let backGroundSelected = style.getPropertyValue("background-color");
    elementoClicado.style.background = backGroundSelected;
}
let tabelaPixel = document.getElementsByClassName("pixel");

for (let index = 0; index < tabelaPixel.length; index +=1){
    tabelaPixel[index].addEventListener("click",colorThePixel)
}
