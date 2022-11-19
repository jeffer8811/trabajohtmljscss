var lisstado_palabrs = [
    "Mi abuela cocinó fideos con estofado.",
"El sol saldrá a las 6.30 de la mañana.",
"Damián se cortó el pelo.",
"Mi tía fue al supermercado en el auto.",
"Me compré una bicicleta nueva.",
"Tengo turno con el dentista a las 18 horas.",
"Mañana nos vamos de campamento.",
"El intendente fue reelecto."];

var acertadas = 0;
var timer, indice;
var tiempo = 10;

function comenzarJuego(){
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";
    
    document.getElementById("palabra_ingresada").focus();

    cargarPalabra();

    timer = setInterval('restarTiempo()', 1000);

}

function cargarPalabra(){
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML =listado_palabras[
        indice];
    
    listado_palabras.splice(indice,1);
}
function comparar(){
    var palabra_mostrada = document.getElementById("palaabra").innerHTML
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
    
    palabra_tecleada = palabra_tecleada.toUpperCase();

    if(palabras_mostrada==palabra_tecleada){
        acertadas++;
        document.getElementById("palabra_ingresada").value="";
        agregarNode(palabra_tecleada);
        cargarPalabra();
    }
}

function agregarNode(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}
















