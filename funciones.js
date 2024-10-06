const contenido = document.getElementById('contenido');

export const articulos = [
    {id: 0, name: 'Ratón multiusos', color: 'black', pvp: 15},
    {id: 1, name: 'Monitor HV 3000', color: 'black', pvp: 180},
    {id: 2, name: 'Teclado', color: 'black', pvp: 180},
    {id: 3, name: 'Caja Torre', color: 'black', pvp: 180},
    {id: 4, name: 'Adaptador Bluetooh', color: 'black', pvp: 180},
    {id: 5, name: 'Altavoz', color: 'black', pvp: 180},
    {id: 6, name: 'Alfombrilla Teclado', color: 'black', pvp: 180},
    {id: 7, name: 'PenDrive', color: 'black', pvp: 180},
    {id: 8, name: 'Cable VGA', color: 'black', pvp: 180},
    {id: 9, name: 'Cable HDMI', color: 'black', pvp: 180},
    {id: 10, name: 'Disco Duro SSD', color: 'black', pvp: 180}
];

export function lista(){

    const lista = document.createElement('ul');
    lista.className = "list-group";
    lista.id = "lista";
    articulos.forEach((articulo) => {
        
        const elemento = document.createElement('li');
        elemento.className = "list-group-item";
        elemento.innerText = `${articulo.name} - ${articulo.color} - ${articulo.pvp}€`;
        lista.appendChild(elemento); 
        
        contenido.appendChild(lista);

    })
}

export function crearElemento(nombre, color, pvp){
    // Validar que se estén pasando los valores correctos
    if (nombre && color && pvp) {
        // Crear el nuevo artículo
        const nuevoArticulo = {
            id: articulos.length,  // id será el próximo número en la lista
            name: nombre,
            color: color,
            pvp: pvp
        };

        // Agregar el nuevo artículo al arreglo
        articulos.push(nuevoArticulo);

       
       
    } else {
        console.log("Todos los campos son necesarios para agregar un nuevo artículo.");
    }
}

export function actualizar(){
    contenido.innerHTML = '';
    lista();
}