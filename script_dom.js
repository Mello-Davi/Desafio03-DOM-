//inicialização das variáveis
let display = document.querySelector("#displayDasNotas");
let btn_adicionar = document.querySelector("#btn_adicionar");
let btn_resultado = document.querySelector("#btn_resultado");
let input = document.querySelector("#inputNotas");
let notas = [];

//função para colocar a nota dentro do display
function adicionar_nota(){
    let valor = input.value.replace(',','.').trim; //assim ele aceita vírgula como separador decimal
    if(valor === "") { //se o usuário não digitar nada, ele é 
        alert("Por favor, insira uma nota.");
        return;
    }

    let nota = parseFloat(valor);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }
    
    notas.push(nota);
    display.value += `A nota ${notas.length} foi ${nota}\n`;
    input.value = "";
}

