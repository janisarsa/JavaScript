
/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * 
 */
function perimetroCírculo(diametro) {
    let perimetro = diametro * 3.141592
    console.log("El perimetro calculado es de: " + perimetro);
}

/**
 * calcular el area de un rectangulo */
function areaRectangulo(largo, ancho) {
    let area = largo * ancho
    console.log("El area es igual a: " + area);
}

/**
 * calcular el cuadrado de un numero */
function calcularCuadrado(numero) {
    return numero * numero;
}

/**
 * calcular la conversion de grados celsius a farenheit */
function celAFar(celsius) {
    return (celsius * 1.8) + 32;

}

/**
 * calcular el valor del voltaje dadas la resistencia y la corriente */
function voltaje(resistencia, corriente) {
    return resistencia * corriente;

}
/*

 * calcular el volumen de una esfera */
function volumenEsfera(radio, pi) {
    let vol = (4 / 3) * pi * (radio * radio * radio)
    console.log("El volumen de una esfera es: " + vol);

}
/*
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */
