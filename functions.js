function verificarParOuImpar() {
    var numero = Number(document.getElementById('numero').value);

    var resultado = (numero % 2 === 0) ? 'O seu numero é impar.' : 'O seu numero é par.'; //Verifica o número passado se ele vai ser impar ou par . 
    
    document.getElementById('resultado').innerHTML = resultado;
}
