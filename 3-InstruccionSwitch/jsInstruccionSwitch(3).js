function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){

    case "Febrero":
        alert("Este mes tiene màs de 29 dìas");
        break;

    default:
        alert("Este mes tiene 30 dìas o màs");
        break;
        
    //Es default si no es ninguna de las condiciones nombradas anteriormente
	
	
}

}//FIN DE LA FUNCIÓN