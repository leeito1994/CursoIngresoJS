function mostrar()
{
//tomo la edad  

var edad

edad = document.getElementById("edad").value;

if (edad >= 13 && edad <= 17){

    alert("La persona es adolescente");

}

if (edad >= 18){

    alert("La persona es mayor de edad");

}

if (edad <= 12){

    alert("La persona es menor de edad");

}


}//FIN DE LA FUNCIÓN