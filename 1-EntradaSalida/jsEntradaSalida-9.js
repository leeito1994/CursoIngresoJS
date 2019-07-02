/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var numero1;

var numero2;

var operador1;

numero1 = document.getElementById("sueldo").value;

operador1 = parseInt(numero1, 10);

numero2 = operador1 * 0.10 + operador1

document.getElementById("resultado").value = numero2;


	
}
