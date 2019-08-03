function mostrar() {

    var nota;
    var sexoBajo = 0;
    var promedio;
    var contador = 0;
    var contadorNotas = 0;
    var varonesAlta = 0;
    var notaBaja = 0;
    var notaAlta = 0;


    while (contador < 5) {

        nota = prompt("ingrese nota");
        nota = parseInt(nota);

        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("error, ingrese numero del 1 del 10");

            nota = prompt("ingrese numero");
            nota = parseInt(nota);

        }

        sexo = prompt("ingrese sexo");

        if (sexo != "f" && sexo != "m") {
            alert("error, ingrese f o m");

            sexo = prompt("ingrese sexo");

        }
        if (contador == 0 || nota < notaBaja){
            notaBaja = nota;
            sexoBajo = sexo;
        }
        if(sexo == "m" && nota >= 6){
            varonesAlta++;
        }

       
        contador++;
        contadorNotas = contadorNotas + nota;
        promedio = contadorNotas / contador;

    }
    alert("el promedio es " + promedio + " la nota mas baja fue " + notaBaja + " y del sexo "+ sexoBajo +" y los varones que tuvieron nota de 6 o mas fue " + varonesAlta);
}
