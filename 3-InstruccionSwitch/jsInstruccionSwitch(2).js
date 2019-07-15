function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    //ESTO VA ENTRE PARENTESIS CAPO MASTER

    case "Enero":
    case "Diciembre":
    case "Febrero":
    case "Octubre":
    case "Noviembre":
    case "Septiembre":
        alert("Ya pasamos el frio, ahora calor!");
        break;

    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;

    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frìo");
        break;
}



}//FIN DE LA FUNCIÓN