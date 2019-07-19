function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");

	//while(!(numero > 0 && numero < 10)); //<-- LA OTRA MANERA DE HACER LO MISMO.
	while (numero < 0 || numero > 10) {

		numero = prompt("error, reingrese un número entre 0 y 10.");
		
	}
	    document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN