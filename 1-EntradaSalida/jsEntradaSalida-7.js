/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 




function sumar()
{	
    var numero1;

    var numero2;
    
    var resultadosuma;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    numero1 = parseInt(numero1);

    numero2 = parseInt(numero2);

    resultadosuma = numero1 + numero2;

    alert("El resultado de la suma es " + resultadosuma);

    


}

function restar()
{
    var numero1;

    var numero2;
    
    var resultadoresta;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    numero1 = parseInt(numero1);

    numero2 = parseInt(numero2);

    resultadoresta = numero1 - numero2;

    alert("El resultado de la resta es " + resultadoresta);

    



}

function multiplicar()
{  
    var numero1;

    var numero2;

    var resultadomult;
    
    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    numero1 = parseInt(numero1);

    numero2 = parseInt(numero2);

    resultadomult = numero1 * numero2;

    alert("El resultado de la multiplicación es " + resultadomult);
}

function dividir()
{

    var numero1;

    var numero2;

    var resultadodiv;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    numero1 = parseInt(numero1);

    numero2 = parseInt(numero2);

    resultadodiv = numero1 / numero2;

    alert("El resultado de la división es " + resultadodiv);

}

