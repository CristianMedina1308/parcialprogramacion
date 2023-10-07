var materias = 0;
var calcular = 0;
var nom = "";
var i = 10;


nom = prompt("Diguite el nombre: ")
faltas = parseInt(prompt("Diguite el porcentaje de las faltas: "))
materias  = parseInt(prompt("De las 10 materias cauntas aprobo"))


if (faltas >= 80 && materias >= 8){
    alert("El estudiante " + nom + " aprobo")

}

else{
    alert("El estudiante " + nom + " no aprobo")


}