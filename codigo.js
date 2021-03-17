function mostrar() {
    //Muestra los 2 mensajes enb consola al iniciar
    console.log("Hola Mundo");
    console.log(" Soy el primer script");
}

function mensaje() {
    var mensaje = "Hola Mundo! Que facil es incluir 'comillas simples' y \"comillas dobles\"";
    alert(mensaje);
}

function meses() {
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "noviembre", "diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

function valores() {
    var valores = [true, 5, false, "hola", "adios", 2];
    var resultado = valores[3] > valores[4];
    console.log(resultado);

    var valor1 = valores[0];
    var valor2 = valores[2];
    var resultado = valor1 || valor2;
    console.log(resultado);

    resultado = valor1 && valor2;
    console.log(resultado);

    var num1 = valores[1];
    var num2 = valores[5];

    var suma = num1 + num2;
    console.log(suma);

    var resta = num1 - num2;
    console.log(resta);

    var multiplicacion = num1 * num2;
    console.log(multiplicacion);

    var division = num1 / num2;
    console.log(division);

    var modulo = num1 % num2;
    console.log(modulo);
}

function ejercicio5() {
    var numero1 = 5;
    var numero2 = 8;

    if (numero1 <= numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 >= 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 != 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    if (++numero1 < numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

function ejercicio6() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = prompt("Introduce el numero de DNI (sin letra)");
    var letra = prompt("Introduce la letra del DNI");
    letra = letra.toUpperCase();

    if (numero < 0 || numero > 99999999) {
        alert("El numero no es valido");
    } else {
        var letraDni = letras[numero % 23];
        if (letraDni != letra) {
            alert("La letra o el número no son correctos");
        } else {
            alert("El número de DNI y la letra son correctos");
        }
    }

}

function ejercicio7() {
    var numero = prompt("Calcula el factorial");
    var resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    alert(resultado);

}

function ejercicio8() {
    var numero = prompt("Introduce un numero");
    if (numero % 2 == 0) {
        alert("El numero es par");
    } else {
        alert("El numero es inpar");
    }
}

function ejercicio9() {
    var cadena = prompt("Introduce una cadena de texto");
    if (cadena == cadena.toLowerCase()) {
        alert("solo minusculas");
    } else if (cadena == cadena.toUpperCase()) {
        alert("SOLO MAYUSCULAS");
    } else {
        alert("aMbAs");
    }
}

function ejercicio10() {
    var cadena = prompt("Introduce el texto").toLowerCase();
    var letrasEspacios = cadena.split("");

    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var sinEspacios = "";
    for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            sinEspacios += letrasEspacios[i];
        }
    }

    var letras = sinEspacios.split("");
    var letrasReves = sinEspacios.split("").reverse();

    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {
            // Todo bien
        } else {
            // Alguna letra es distinta, por lo que ya no es un palindromo
            iguales = false;
        }
    }

    if (iguales) {
        alert("Es un palíndromo");
    } else {
        alert("No es un palíndromo");
    }

}