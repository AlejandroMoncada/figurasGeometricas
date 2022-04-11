var PI = Math.PI;

//Funciones para hallar el area y el perimetro de un cuadrado.
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Funciones para hallar el area y el perimetro de un circulo.
function perimetroCirculo(radio){
    return 2 * PI * radio;
}

function areaCirculo(radio){
    return PI * radio * radio;
}

//Funciones para hallar el area y el perimetro de un triangulo.
function perimetroTriangulo(lado){
    return lado * 3;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}


//Haremos la conexion de los inputs declarados en html 
//FUNCIONES DEL CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultCuadrado.innerText = "El Perímetro del cuadrado es: "+perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultCuadrado.innerText = "El área del cuadrado es: "+area;
}

//FUNCIONES DEL CIRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    resultCirculo.innerText = "El Perímetro del círculo es: "+perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = perimetroCirculo(value);
    resultCirculo.innerText = "El Área del círculo es: "+area;
}

//FUNCIONES DEL TRÍANGULO
function calcularPerimetroTriangulo(){
    const lado = document.getElementById("InputTrianguloLado");
    const value = lado.value;

    const perimetro = perimetroTriangulo(value);
    resultTriangulo.innerText = "El Perímetro del tríangulo es: "+perimetro;
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const altura = document.getElementById("InputTrianguloAltura");
    const value1 = altura.value1;
    const value = base.value;

    const area = areaTriangulo(value,value1);
    resultTriangulo.innerText = "El Área del tríangulo es: "+area;
}