/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numero1;

var numero2;

var operador1;

var operador2;

function sumar()
{	
    
    var resultadosuma;

    numero1 = document.getElementById("numeroUno").value;

numero2 = document.getElementById("numeroDos").value;

operador1 = parseInt(numero1, 10);

operador2 = parseInt(numero2, 10);

    resultadosuma = operador1 + operador2;

    alert("El resultado de la suma es " + resultadosuma);

    


}

function restar()
{
    
    
    var resultadoresta;

    numero1 = document.getElementById("numeroUno").value;

numero2 = document.getElementById("numeroDos").value;

operador1 = parseInt(numero1, 10);

operador2 = parseInt(numero2, 10);

    resultadoresta = operador1 - operador2;

    alert("El resultado de la resta es " + resultadoresta);

    



}

function multiplicar()
{  

    var resultadomult;
    
    numero1 = document.getElementById("numeroUno").value;

numero2 = document.getElementById("numeroDos").value;

operador1 = parseInt(numero1, 10);

operador2 = parseInt(numero2, 10);

    resultadomult = operador1 * operador2;

    alert("El resultado de la multiplicación es " + resultadomult);
}

function dividir()
{
    
    var resultadodiv;

    numero1 = document.getElementById("numeroUno").value;

numero2 = document.getElementById("numeroDos").value;

operador1 = parseInt(numero1, 10);

operador2 = parseInt(numero2, 10);

    resultadodiv = operador1 / operador2;

    alert("El resultado de la división es " + resultadodiv);

}

