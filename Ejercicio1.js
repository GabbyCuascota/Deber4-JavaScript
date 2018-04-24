// CUASCOTA GABRIELA
// desarrollo
var nombre = 'Gabriela';
var apellido = 'Cuascota';
var cedula = '1720437670';
var edad = 26;
var estadoCivil = 'soltera';
var arreglo = [nombre, apellido, cedula, edad, estadoCivil];
function validarNumeroDeStringsEnArreglo (arreglo){
    if (nombre == edad){
        console.log(typeof edad)
    }else{
        console.log("No es string")
    }
    return arreglo;
}
console.log(typeof nombre) ;
console.log(typeof apellido) ;
console.log(typeof cedula) ;
console.log(typeof edad) ;
console.log(typeof estadoCivil);
//console.log(typeof arreglo);
console.log('Numero de strings es: ',arreglo.length);