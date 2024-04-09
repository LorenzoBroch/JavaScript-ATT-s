function ganhoGastos(){
    let gasto = 0;
    let ganho = 0;
    let somatorioGasto = 0;
    let somatorioGanho = 0;
    for (let i = 0; i <3; i++){
    ganho = parseFloat((prompt("Qual o ganho bruto da empresa do mês " + (i+1) + ":")));
    (somatorioGanho = somatorioGanho + ganho);
    gasto = parseFloat((prompt("Qual os gastos da sua empresa do mês " + (i+1) + ":")));
    (somatorioGasto = somatorioGasto + gasto);
    } 

    if (somatorioGanho > somatorioGasto) {
        console.log("Sua empresa saiu no lucro!");
    } else {
        console.log("Sua empresa saiu no prejuízo!");
    }

    console.log("Os ganhos da sua empresa foram:"+ somatorioGanho);
    console.log("Os gastos da sua empresa foram:"+ somatorioGasto);
}
ganhoGastos();