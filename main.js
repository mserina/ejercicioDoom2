import { actualizar, crearElemento, lista } from "./funciones.js";

window.onload = lista();

const botonCrear = document.getElementById('insertar');
botonCrear.addEventListener('click', function(){
    const nombre = prompt("Inserte nombre"); 
    const color = prompt("Inserte color");
    const pvp = prompt("Inserte pvp");
    crearElemento(nombre, color, pvp);
})

const botonActualizar = document.getElementById('actualizar');
botonActualizar.addEventListener('click', function(){
    actualizar();
})