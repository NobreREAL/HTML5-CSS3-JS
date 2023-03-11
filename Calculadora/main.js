let data = {
    numeros: document.querySelectorAll('.teclas'),
    operacoes: document.querySelectorAll('.teclas_operacionais'),
    resultado: document.querySelector('.tecla_resultado'),
    tela: document.querySelector('.resposta'),
    apagar: document.querySelector('.tecla_apagar'),
    ponto: document.querySelector('.teclas')
}

let valores = {
    resultado: 0,
    numeros: [],
    operador: "",
    pontos: [],
    pontoDetectado: false,
    contagemPontos: 0,
}

for (let i = 0; i < data.numeros.length; ++i) {
    let numeros = data.numeros[i];

    numeros.addEventListener("click", () =>
        selecionarNumero(numeros.innerHTML));
}

for (let i = 0; i < data.operacoes.length; ++i) {
    let tecla_operacional = data.operacoes[i];

    tecla_operacional.addEventListener("click", () =>
        selecionarOperacao(tecla_operacional.innerHTML));
}

let tecla_resultado = data.resultado;

tecla_resultado.addEventListener("click", () =>
    mostrarResultado(valores.numeros[0], valores.operador))

let tecla_apagar = data.apagar;
tecla_apagar.addEventListener("click", () =>
    apagar())

let leitor_numeros = data.tela.innerHTML;

function mostrarResultado(operador1, operator) {

    let num_auxiliar;

    let operador_tela = data.tela.innerHTML;

    if (operator == '' || operator == null)
    {
    }

    if (operador1 > operador_tela) {
        num_auxiliar = operador1;
        operador1 = operador_tela;
        operador_tela = num_auxiliar;
    }

    if (operator == "+") {
        valores.resultado = (Number(operador_tela) + Number(operador1)).toFixed(2);
        
        if (valores.resultado.length > 10)
        {
            let auxiliar = valores.resultado.slice(2)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0
        }

        if (valores.resultado.length > 15)
        {
            let auxiliar = valores.resultado.slice(5)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        if (valores.resultado.length > 25)
        {
            let auxiliar = valores.resultado.slice(10)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        else{
            let auxiliar = valores.resultado;
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }
    }
    else if (operator == "-") {
        valores.resultado = (Number(operador_tela) - operador1).toFixed(2);
        
        if (valores.resultado.length > 10)
        {
            let auxiliar = valores.resultado.slice(2)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0
        }

        if (valores.resultado.length > 15)
        {
            let auxiliar = valores.resultado.slice(5)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        if (valores.resultado.length > 25)
        {
            let auxiliar = valores.resultado.slice(10)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        else{
            let auxiliar = valores.resultado;
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }
    }
    else if (operator == "*") {
        valores.resultado = (Number(operador_tela) * operador1).toFixed(2);
        
        if (valores.resultado.length > 10)
        {
            let auxiliar = valores.resultado.slice(2)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0
        }

        if (valores.resultado.length > 15)
        {
            let auxiliar = valores.resultado.slice(5)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        if (valores.resultado.length > 25)
        {
            let auxiliar = valores.resultado.slice(10)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        else{
            let auxiliar = valores.resultado;
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }
    }
    else if (operator == "/") {
        valores.resultado = (Number(operador_tela) / operador1).toFixed(2);
        
        if (valores.resultado.length > 10)
        {
            let auxiliar = valores.resultado.slice(2)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0
        }

        if (valores.resultado.length > 15)
        {
            let auxiliar = valores.resultado.slice(5)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        if (valores.resultado.length > 25)
        {
            let auxiliar = valores.resultado.slice(10)
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }

        else{
            let auxiliar = valores.resultado;
            data.tela.innerHTML = auxiliar;
            valores.resultado = 0;
        }
    }

    else {
        data.tela.innerHTML = "";
    }
}

function operador(operacao) {
    let operadores = data.tela.innerHTML;
    valores.numeros.push(Number(operadores));
    valores.operador = operacao;
    data.tela.innerHTML = "";

    valores.pontoDetectado = false;
    valores.contagemPontos = 0;
}

function selecionarOperacao(operacao) {

    if (valores.numeros[0] == 0 & data.tela.innerHTML != '0' || data.tela.innerHTML == '') {
        valores.numeros.length = 0;
        data.tela.innerHTML = 'ERROR';
    }

    else if (valores.numeros[0] == 0) {
        operador(operacao);
    }

    else {
        operador(operacao);
    }

}

function selecionarNumero(valor) {


    if (valor == '.' && data.tela.innerHTML.length == 0) {
        data.tela.innerHTML = 'ERROR';
    }

    else if(valor == '0' && data.tela.innerHTML.length == 0) {
        data.tela.innerHTML = ''
    }

    else {
        
        if (data.tela.innerHTML.length == 10){

        }
        
        else{
            

            if (valor == '.') {
                valores.contagemPontos += 1;
                if (valores.contagemPontos > 1) {
                    valores.pontoDetectado = true;
                }
            }

            if (data.tela.innerHTML.length > 9)
            {
                console.log("nien")
            }

            if (data.tela.innerHTML == 'ERROR' && valor == '.')
            {
                data.tela.innerHTML = 'ERROR';
            }

            if (data.tela.innerHTML == 'ERROR') {
                data.tela.innerHTML = valor;
            }

            if (valores.pontoDetectado == true && valor == ".")
            {
            }

            else {
                data.tela.innerHTML += valor;
            }
        }
    }

}

function apagar() {
    valores.numeros.length = 0;
    data.tela.innerHTML = "";
}

