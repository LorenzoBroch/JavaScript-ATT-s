function parImpar() {
    let num = 0;
    num = parseInt((prompt("Digite um numero: ")));
    if (num%2 == 0){
        console.log("Seu número é par, transformando esse número em o impar mais próximo: "+(num+1));
    } else {
        console.log("Seu número é impar, Transformando esse número em o par mais próximo: "+(num-1));
    }
}
parImpar();