document.addEventListener("DOMContentLoaded",iniciar,false);

function iniciar() {
    let b1=document.querySelector("#b1");
    b1.addEventListener("click",darLaVuelta,false);

    let b2=document.querySelector("#b2");
    b2.addEventListener("click",quitarEspacios,false);

    let b3=document.querySelector("#b3");
    b3.addEventListener("click",quitarVocales,false);

    let b4=document.querySelector("#b4");
    b4.addEventListener("click",darLaVuelta,false);
    b4.addEventListener("click",mayúsculasYMinúsculas,false);
}


function darLaVuelta() {
    //let p1=document.getElementById("p1");
    let p1=document.querySelector("#p1");
    let texto=p1.innerHTML;
    let resultado="";
    //for (let i=0; i< texto.length; i++)
    //    resultado= texto.charAt(i) + resultado;

    for (let i=texto.length-1; i>=0; i--) {
        resultado+=texto.charAt(i);
    }

    p1.innerHTML=resultado; 
}

function quitarEspacios() {
    let p2=document.querySelector("#p2");
    let texto=p2.innerHTML;
    let resultado="";

    for (let i=0; i<texto.length; i++) {
        if (texto.charAt(i)!=" ") {
            resultado+=texto.charAt(i);
        }
    }

    p2.innerHTML=resultado; 
}

function quitarVocales() {
    let p3=document.querySelector("#p3");
    let texto=p3.innerHTML;
    let resultado="";

    for (let i=0; i<texto.length; i++) {
        if (!esVocal(texto.charAt(i))) {
            resultado+=texto.charAt(i);
        }
    }
    p3.innerHTML=resultado; 
}

function esVocal(letra) {
    letra=letra.toLowerCase();
    if (letra=='a') return true;
    if (letra=='e') return true;
    if (letra=='i') return true;
    if (letra=='o') return true;
    if (letra=='u') return true;
    return false;
}

let estado=false;

function mayúsculasYMinúsculas() {
    let p4=document.querySelector("#p4");
    let texto=p4.innerHTML;

    if (estado) texto=texto.toLowerCase();
    else texto=texto.toUpperCase();

    estado=!estado;

    p4.innerHTML=texto;
}