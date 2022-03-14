var numero = prompt ("ingresa un numero");
var resultado = numero % 2;

//aqui se imprime el resultado de la division usando el residuo
console.log(resultado);

//aqui se verifuca si es divisible entre 2
if(resultado == 0){
    alert ("Es un numero par");
}else{
    alert ("No es un numero par");
}