function dibujarTabla() {
    let cuadro=document.querySelector("#numero");
    let destino=document.querySelector("#resultado");

    let texto="";
    for (let i=0; i <= 10; i++) {
        texto+="<p>" + cuadro.value + " X " + i + " = " + cuadro.value*i + "</p>";
    }

    destino.innerHTML=texto;
    
}