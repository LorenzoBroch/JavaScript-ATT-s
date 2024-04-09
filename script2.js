console.log("Estamos começando o lançamento do foguete!");
let segundos = 10;
function lancamento() {
        console.log(segundos);
        segundos--;
        if (segundos >= 0) {
        setTimeout(lancamento, 1000);
    } else {
        console.log("Lançamento completo!");
    }
}
lancamento();