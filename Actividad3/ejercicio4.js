var numero1 = prompt ("ingresa numero uno");
var numero2 = prompt ("ingresa numero dos");

if(numero1== numero2)
{
    console.log("Son iguales");
} 
else{
    if(numero1 < numero2){
        console.log ("El numero menor es", numero1 );
    }
    else{
        console.log ("El numero menor es", numero2);
    }
}