function tablaDelSieteV1() {
    var indice=0;
    var texto="";
    while (indice<=10) {
        texto+=indice + " X 7 = " + indice*7 + "\n";
        indice++;
    }
    console.log(texto);
}

function tablaDelSiete() {
    let texto=3883;
    texto=tablaDelSieteV1;
    texto="";
    for (let indice=0; indice<=10; indice++) {
        texto+=indice + " X 7 = " + indice*7 + "\n";
    }
    //console.log("mi indice local vale " + indice);
    console.log(texto);
}

function aVerQuéPasa() {
    let numero=4330;
    do {
        numero++;
        console.log(numero);

    } while(numero<7);
    

    console.log("indice vale " + indice);
    console.log("texto vale " + texto);
}

function elIntérprete() {
    let texto="console.l";
    texto +="og('hola')";

    console.log("El texto vale " + texto);

    eval(texto);
}