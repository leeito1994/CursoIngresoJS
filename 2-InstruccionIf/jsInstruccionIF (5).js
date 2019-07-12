function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if (edad < 13){
        //Se puede con un solo if que tenga &&

        alert("La persona no es adolescente")

    }
    
    if (edad > 17){
        //Se puede usar else y alert.

        alert("La persona no es adolescente");

    }


}//FIN DE LA FUNCIÓN
// Cuando son 2 series SEPARADAS (ej < 13 y > 17) se usan 2 if diferentes.
// Cuando es 1 serie "junta" (ej 13-17) se usa un if dentro de otro.