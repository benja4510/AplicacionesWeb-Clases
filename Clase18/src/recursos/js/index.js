//imports
import {productosMascotas,categorias} from "./productos.js"
import { renderizarCatalogo,filtrarporTalle} from "./funciones.js"

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")

const productosfiltrados = filtrarporTalle(productosMascotas, 'S')

//Renderizamos
renderizarCatalogo(contenedorProductos,productosMascotas)



