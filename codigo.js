var numero;
var  resultado;

numero = parseInt (prompt ("Ingrese un número "));
if(numero <0 || numero >=1000 || numero ==0){
    alert ("Numero no valido");
} else if (numero > 0 && numero < 10){
    resultado = numero * numero;
    alert("El resultado es: " + resultado);
} else if (numero >= 10 && numero < 100){
    resultado = numero * 2;
    alert("El resultado es: " + resultado);
} else if (numero >= 100 && numero < 1000){
    resultado = numero - 100; 
    alert("El resultado es: " + resultado);
}else {
resultado = "Numero no valido";
}