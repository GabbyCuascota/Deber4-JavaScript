// CUASCOTA GABRIELA
// desarrollo

var ososA = 4;
function numeroOsos(meses){
    var totalOsos = ososA;
    var a = 1;

        for (a; a < meses; a++) {
            totalOsos = totalOsos * 4
        }
    if (totalOsos > 10000){
        console.log('Removiendo ' + totalOsos / 2 + ' osos de anteojos de la población.');
        return 'Van a existir ' + totalOsos / 2 + ' después del mes ' + meses;
        }
    return 'Van a existir ' + totalOsos + ' después del mes ' + meses;
}
console.log(numeroOsos(7));