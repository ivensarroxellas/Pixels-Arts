let linha = 5;
let coluna = 5;

for (let indexL = 0; indexL < linha; indexL += 1) {
    let linhaTabela = document.createElement("div")
    document.getElementById("pixel-board").appendChild(linhaTabela)
    linhaTabela.classList.add("linhaTabela")
    for (let indexC = 0; indexC < coluna; indexC += 1) {
        let colunaTabela = document.createElement("div")
        linhaTabela.appendChild(colunaTabela)
        colunaTabela.classList.add("pixel")
    }
    
}