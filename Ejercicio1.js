// CUASCOTA GABRIELA
// desarrollo
var nombre = 'Gabriela';
var apellido = 'Cuascota';
var cedula = '1720437670';
var edad = 26;
var estadoCivil = 'soltera';
var arreglo = [nombre, apellido, cedula, edad, estadoCivil];
function validarNumeroDeStringsEnArreglo (arreglo=['Gabriela','Cuascota','1720437670',26,'soltera']){
    var x = 0;
    var y = 0;
    for (x; x<arreglo.length;x++){
        console.log(typeof arreglo[x]);
        if (typeof arreglo[x] == 'string'){
            y = y + 1;
        }
    }
    return 'Número de strings es: '+ y;
}
console.log(validarNumeroDeStringsEnArreglo(arreglo));


