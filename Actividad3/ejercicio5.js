var numA = Number(prompt("ingresa numero uno"));
var numB = Number(prompt("ingresa numero dos"));
var numC = Number(prompt("ingresa numero tres"));

if (numA === numB && numA ===numC){
    console.log("TODOS LOS NUMEROS SON IGUALES")
}else if(numA > numB){
    if(numA > numC){
        console.log("El numero A", numA, "es mayor")
    }else if (numC > numA){
        console.log ("El numero C", numC, "es el mayor")
    }else {
        console.log ("El numero A y el numero C son iguales", numA, numC)
    }
}else if (numB > numA){
    if (numB > numC){
        console.log("El numero B", numB, "es el mayor")
    }else if (numC > numB){
        console.log("El numero C", numC, "es el mayor")
    } else {
        console.log ("El numero B y el C son iguales", numB, numC)
     }
    }else {
        console.log("El numero B y el A son iguales", numA,numB)
    }
    





