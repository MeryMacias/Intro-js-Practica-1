var numero = prompt ("ingresa un numero");
var indice = 1;
do 
{
    if((indice % 5) == 0)
    {
      console.log (indice);
    }

    indice++;
} while (indice <= numero)
