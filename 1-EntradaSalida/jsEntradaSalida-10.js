/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var numero1;

    var numero2;

    numero1 = document.getElementById("importe").value;

    numero1 = parseInt(numero1);

    numero2 = numero1 * 0.75

    document.getElementById("resultado").value = numero2;

// NaN = Not a Number
// Undefined = no tienen valor
// Null = ID incorrecta, se anula el proceso.
// 1.X para sumar % ; 0.Resto de X a 100 para descontar %







}
