function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    console.log(edad);

    if (edad >= 18 && edad <= 122){

        alert("La persona es mayor de edad");

    } 

    if (edad < 18 && edad > 0){

        alert("La persona es menor de edad");

    }

}//FIN DE LA FUNCIÓN