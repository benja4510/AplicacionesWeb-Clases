//imports
import {productosMascotas,categorias} from "./productos.js"
import { renderizarCatalogo,filtrarporTalle} from "./funciones.js"
import { obtenerDatos } from "./productos.js"
import { URL_PRODUCTOS } from "./config.js"

//trabajo con persistencia de datos -> local storage
localStorage.setItem('materia',[1,2,3,4])

const arreglo = [1,2,3,4]
const valorAguardar = JSON. stringify(arreglo) // -> "[1,2,3,4]"
//const valorAguardar = "[1,2,3,4]"
const valor = localStorage.getItem('materia')
console.log(typeof valor)

const valorConvertidoNuevamenteAArreglo = JSON.parse(valor)

//obtener los productos almacenados en JSON
// async - await


const productosMascotas= await obtenerDatos(URL_PRODUCTOS)
//obtenerDatos().then(()=>{

//})

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")


//filtramos el arreglo de productos
const productosfiltrados = filtrarporTalle(productosMascotas, 'S')

const eventoBoton = document.getElementById('evento-boton')

const dialogo = document.getElementById('dialogo')

const carro = document.getElementById('carro')

//Arreglo productos

const productosCarrito = []

//escuchador
eventoBoton.addEventListener('click', (evento)=>{
    //console.log(evento)
    dialogo.show()
    dialogo.showModal()
})

//1) Renderizamos
renderizarCatalogo(contenedorProductos,productosMascotas)

//2) Aplicamos los escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro') 

//const botonesCarro = contenedorProductos.querySelectorAll('[data-id]') // selector de atributo

botonesCarro.forEach((boton)=>{
    //cuerpo foreach
    boton.addEventListener('click', (evento)=>{
        //cuerpo del callback listener
        //cosnt idProducto =  Number(boton.dataset.id)  
        const idProducto = boton.dataset.id
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        carro.textContent = productosCarrito.length
    })
})

