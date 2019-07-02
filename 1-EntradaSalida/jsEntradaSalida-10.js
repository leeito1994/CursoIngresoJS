/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var numero1;

    var numero2;

    var operador1;

    numero1 = document.getElementById("importe").value;

    operador1 = parseInt(numero1, 10);

    numero2 = operador1 / 0.25 + operador1

    document.getElementById("resultado").value = numero2;









}
