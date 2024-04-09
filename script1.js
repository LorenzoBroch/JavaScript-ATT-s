function somar() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou '0' para encerrar): "));
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            console.log("Por favor, digite um número válido.");
        }
        if (numero === 0) {
            continuar = false;
        }
    }
    console.log("A soma dos números é: " + soma);
}
somar();