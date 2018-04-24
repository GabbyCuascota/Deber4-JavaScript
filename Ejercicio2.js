// CUASCOTA GABRIELA
// desarrollo
var gen = [ gen1 = 62,
            gen2 = 62,
            gen3 = 62,
            gen4 = 62,
            gen5 = 124,
            gen6 = 124,
            gen7 = 124,
            gen8 = 124,
            gen9 = 124,
            gen10 = 124,
            gen11 = 124,
            gen12 = 124,
            gen13 = 124,
            gen14 = 124,
            gen15 = 124,
            gen16 = 124,
            gen17 = 124,
            gen18 = 124,
            gen19 = 124]
var A = 0;
var total = 0;
while (A < 4){
    total = total + gen[A];
    console.log('Generador #' + (A + 1) + ' está prendido, añadiendo ' + gen[A] + ' MW para un total de ' + total + ' MW');
    A++;
}
while (A < 4){
    if((A + 1) % 2 == 0){
        console.log('Generador # ' + (A + 1) + ' esta prendido, añadiendo ' + gen[A] + ' MW para un total de ' + total + ' MW.');
    }
    A++;
}
var B = 4;
for (B ; B < gen.length; B++) {
    total = total + gen[B];
    console.log('Generador #' + (B + 1) + ' está prendido, añadiendo ' + gen[B] + ' MW para un total de ' + total + ' MW.');
}
for (B; B < gen.length; B++) {
    if ((B + 1) % 2 === 0) {
        console.log('Generador #' + (B + 1) + ' está Apagado');
    }
    else {
        total = total + gen[B];
        console.log('Generador # ' + (B + 1) + ' está prendido, añadiendo ' + gen[B] + ' MW para un total de: ' + total + ' MW.');
    }
}