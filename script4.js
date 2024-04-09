function Decrescente(){
    let ordem = [];
    let valorUm = 0;
    let valorDois = 0;
    let valorTres = 0;
    let valorQuatro = 0;
    valorUm = parseFloat((prompt("Digite o primeiro número: ")));
    valorDois = parseFloat((prompt("Digite o segundo número: ")));
    valorTres = parseFloat((prompt("Digite o terceiro número: ")));
    valorQuatro = parseFloat((prompt("Digite o quarto número: ")));
    ordem = [valorUm,valorDois,valorTres,valorQuatro];
    console.log(ordem.sort((a, b) => b - a)); // Como isso funciona??
}

Decrescente()