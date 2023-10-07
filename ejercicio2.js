var materias = 0;
var calcular = 0;
var nom = "";
var i = 10;



faltas = parseInt(prompt("ingrese pago: "))


switch (true) {

    case (faltas>=100):
        faltas = faltas * 0.9;
        alert("El descuento es " + faltas);
        break;

    case (faltas<100):
        faltas = faltas * 0.98;
        alert("El descuento es " + faltas);
        break;

}