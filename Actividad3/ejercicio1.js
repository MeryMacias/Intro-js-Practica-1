//aqui se revcibe el numero
var numero = prompt ("ingresa un numero");

//aqui se divide entre 2 y se obtiene el residuo, usando el %
var resultado = numero % 2;

//aqui se imprime el resultado de la division usando el residuo
console.log(resultado);

//aqui se verifuca si es divisible entre 2
if(resultado == 0){
    console.log ("numero es divisible entre 2");
}else{
    console.log ("numero no es divisible entre 2");
}