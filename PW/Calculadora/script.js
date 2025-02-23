const visor = document.getElementById("visor");

function adicionar(botao) {
    visor.value += botao.innerText;
} 

function zero() {
    visor.value += "0";
}

function limparTela() {
    visor.value = "";
}

function apagar() {
    if (visor.value.length > 0) {
        visor.value = visor.value.slice(0, -1);
    }
}

function calcularResultado() {
    try {
        // Limpar espaços e verificar se a expressão é válida
        const expressao = visor.value.trim();
        if (expressao === "") {
            alert("Por favor, insira uma expressão.");
            return;
        }
        visor.value = eval(expressao);
    } catch (e) {
        alert("Erro com a conta: " + visor.value);
    }
}


