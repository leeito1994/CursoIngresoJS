function mostrar()
{
//tomo la edad  

    var edad

    edad = document.getElementById("edad").value;

    if (edad <= 12)
    {

        alert ("Es un niño")

    } 
    else
    {

        if (edad >= 18)
        {

            alert ("Es mayor de edad")

        }

        else 
        {

            alert ("Es adolescente")

        }


    }

}//FIN DE LA FUNCIÓN