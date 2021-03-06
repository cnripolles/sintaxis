document.addEventListener("DOMContentLoaded",function () {
    let estado=false;
    let p1=document.querySelector("#p1");
    let p2=document.querySelector("#p2");
    let p3=document.querySelector("#p3");
    let p4=document.querySelector("#p4");

    document.querySelector("#b1").addEventListener("click",function () {
        let texto=p1.innerHTML;
        let resultado="";
        //for (let i=0; i< texto.length; i++)
        //    resultado= texto.charAt(i) + resultado;
    
        for (let i=texto.length-1; i>=0; i--) {
            resultado+=texto.charAt(i);
        }
    
        p1.innerHTML=resultado; 
    },false);

    document.querySelector("#b2").addEventListener("click",function () {
        let texto=p2.innerHTML;
        let resultado="";
    
        for (let i=0; i<texto.length; i++) {
            if (texto.charAt(i)!=" ") {
                resultado+=texto.charAt(i);
            }
        }
    
        p2.innerHTML=resultado; 
    },false);

    document.querySelector("#b3").addEventListener("click",function () {
        let texto=p3.innerHTML;
        let resultado="";
    
        for (let i=0; i<texto.length; i++) {
            if (!esVocal(texto.charAt(i))) {
                resultado+=texto.charAt(i);
            }
        }
        p3.innerHTML=resultado; 
    },false);

    document.querySelector("#b4").addEventListener("click",function () {
        let texto=p4.innerHTML;
    
        if (estado) texto=texto.toLowerCase();
        else texto=texto.toUpperCase();
    
        estado=!estado;
    
        p4.innerHTML=texto;
    },false);

},false);

function esVocal(letra) {
    letra=letra.toLowerCase();
    if (letra=='a') return true;
    if (letra=='e') return true;
    if (letra=='i') return true;
    if (letra=='o') return true;
    if (letra=='u') return true;
    return false;
}



