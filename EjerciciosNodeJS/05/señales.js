let Arrayseñales = ["100_200_50_330_250_180_190_200_150_90_165_240_20_340"];

function getSeniales(Arrayseñales) {
    señales=Arrayseñales[0].split("_");
    let nuevaCadena= "";
    let ciclosCompletos = 0;
    ocurrenciaNESO=0

    console.log(señales)

    for (let i = 0; i < señales.length; i++) {
        if (señales[i] >= 46 && señales[i] <= 134) {
            nuevaCadena += " N ";

        } else if (señales[i] >= 136 && señales[i] <= 224) {
            nuevaCadena += " O ";
            
        } else if (señales[i] >= 226 && señales[i] <= 314) {
            nuevaCadena += " S ";

        } else if (señales[i] >=316  &&  señales[i] <= 360 || señales[i] >=0  &&  señales[i] <= 44) {
            nuevaCadena += " E ";
        }
    }

    console.log("La señal es:\n" + Arrayseñales + "\n"+ nuevaCadena)

    if (nuevaCadena.indexOf("NESO") ) {
        ciclosCompletos++;
        ocurrenciaNESO++
    }
    if (nuevaCadena.indexOf("OSEN") ) {
        ciclosCompletos++;
        //ocurrenciaOSEN
    }
    if (nuevaCadena.indexOf("ESON") ) {
        ciclosCompletos++;
        //ocurrenciaESON++
    }
    if (nuevaCadena.indexOf("SENO") ) {
        ciclosCompletos++;
        //ocurrenciaSENO++
    }
    if (nuevaCadena.indexOf("SONE") ) {
        ciclosCompletos++;
        //ocurrenciaSONE++
    }
    if (nuevaCadena.indexOf("ENOS") ) {
        ciclosCompletos++;
        //ocurrenciaENOS++
    }
    if (nuevaCadena.indexOf("ONES")) {
        ciclosCompletos++;
        //ocurrenciaONES++
    }
    if (nuevaCadena.indexOf("NOSE")) {
        ciclosCompletos++;
        //ocurrenciaNOSE++
    }

    porcentajeOcurrencia = (ocurrenciaNESO/3)*100

    console.log("El porrcentaje de ocurrencia de NESO es: " + porcentajeOcurrencia )
    console.log("La cantidad de ciclos completos son: " + ciclosCompletos);
    
}

const respuesta = getSeniales(Arrayseñales)