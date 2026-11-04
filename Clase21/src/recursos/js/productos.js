
//obtener los productos almacenados en JSON
// async - await
async function obtenerDatos(URL){

    const respuesta = await fetch('./recursos/datos/productos.json')
    const datos = await respuesta.json() //obtiene datos del cuerpo - transformar un objeto json (bien formado) a un objeto JS
    return datos

}

export {obtenerDatos}




