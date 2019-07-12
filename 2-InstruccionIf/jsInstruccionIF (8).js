function mostrar()
{
//tomo la edad  

var edad;

var estado;

edad = document.getElementById("edad").value;

estado = document.getElementById("estadoCivil").value;

console.log(edad)

if (edad < 18 || estado != "Soltero") {

} else {

    alert ("Es soltero y no es menor");

}


	


}//FIN DE LA FUNCIÓN