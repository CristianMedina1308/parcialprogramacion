var numero_1=0;
var numero_2=0;

var resultado;

numero_1 = parseInt(prompt("Ingrese el primer número: "));
numero_2 = parseInt(prompt("Ingrese el segundo número: "));

 switch (true) {

    case (numero_1>numero_2):
        resultado = numero_1+numero_2;
        alert("El resultado es " + resultado);
        break;

    case (numero_1<numero_2):
        resultado = (numero_1*numero_1)+(numero_2*numero_2);
        alert("El resultado es " + resultado);
        break;

    default:
        alert("los numeos son iguales");
        break;

}