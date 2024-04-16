function calcular() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = (document.getElementById('escolha').value);
    var mostrarResultado = document.getElementById('mostrarResultado');

switch(operacao) {
    case 'Adicao':
        resultado = numero1 + numero2;
        break
    case 'Subtracao':
        resultado = numero1 - numero2;
        break
    case 'Multiplicacao':
        resultado = numero1 * numero2;
        break
    case 'Divisao':
        if (numero2 === 0) {
            alert('Opção inválida! Impossível dividir por 0.')
            break
        }
        resultado = numero1 / numero2;
        break
}
mostrarResultado.innerHTML = resultado;
}