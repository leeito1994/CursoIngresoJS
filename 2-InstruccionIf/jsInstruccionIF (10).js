function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num1;

	num1 = Math.floor((Math.random()*10)+1);

	console.log(num1);

	if (num1 >= 9) {

	alert("EXCELENTE");

	}

	if (num1 >= 4) {

	if (num1 < 9) {

	alert("APROBÓ");

	}
	}

	if (num1 < 4) {

	alert("Vamos, la proxima se puede");

}

}//FIN DE LA FUNCIÓN