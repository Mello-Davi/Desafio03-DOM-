//inicialização das variáveis
let display = document.querySelector("#displayDasNotas");
let btn_adicionar = document.querySelector("#btn_adicionar");
let btn_resultado = document.querySelector("#btn_resultado");
let input = document.querySelector("#inputNotas");
let notas = [];

//função para colocar a nota dentro do display
function adicionar_nota(){
    let valor = input.value.replace(',','.').trim(); //assim ele aceita vírgula como separador decimal
    if(valor === "") { 
        alert("Por favor, insira uma nota.");
        return;
    }

    let nota = Number(valor);
    if (nota != nota|| nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }
    
    notas.push(nota);
    display.value += `A nota ${notas.length} foi ${nota}\n`;
    input.value = "";
}

//função para calcular média
function calcular_media(){
    if(notas.length === 0){
        alert("Nenhuma nota foi adicionada ainda.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma/ notas.length;
    document.querySelector(".resultado").textContent = `A média é: ${media.toFixed(2)}`;
}

//adicionando a funcionalidade dos botoes com a funcao .addEventListener
btn_adicionar.addEventListener("click", adicionar_nota);
btn_resultado.addEventListener("click", calcular_media);
