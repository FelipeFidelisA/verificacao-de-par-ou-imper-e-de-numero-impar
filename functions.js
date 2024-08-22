function verificarParOuImpar() {
    var numero = Number(document.getElementById('numero').value);

    var resultado = (numero % 2 == 0) ? 'O seu numero é par.' : 'O seu numero é impar.' ; //Verifica o número passado se ele vai ser impar ou par . 
    
    document.getElementById('resultado').innerHTML = resultado;
}

function verificarNumeroPrimo() {
    var numero = parseInt(document.getElementById('numPrimo').value);
    var divisores = 0;

    for (var count = 1; count <= numero; count++) {
        if (numero % count === 0) {
            divisores++;
        }
    }

    var resposta = (divisores === 2) ? 'O seu número é primo.' : 'O número é composto.';
    document.getElementById('resposta').innerHTML = resposta;
}