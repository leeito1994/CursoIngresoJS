/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    
   var numero1;

   var numero2;

   var operador1;
   
   var operador2;

   var resto;



   numero1 = document.getElementById("numeroDividendo").value;

   numero2 = document.getElementById("numeroDivisor").value;

   operador1 = parseInt(numero1, 10);

   operador2 = parseInt(numero2, 10);

   resto = operador1 % operador2;

   alert("El resto de la división es " + resto);

   
   

   

   






}
