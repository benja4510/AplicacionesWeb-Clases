function renderizarCatalogo(contenedor /*es la referencia del DOM*/,productos /* es el arreglo*/){

    let productosHTML = ''  

    productosMascotas.forEach((producto)=>{
    productosHTML += `
<article class="producto">
    <h3>${producto.nombre}</h3>
    <picture>
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </picture>
    <p>
       ${producto.descripcion}
    </p>
    <ul>
        <li>
            Talles ${producto.talles[0]}
        </li>
        <li>
            Precio $ ${producto.precio}
        </li>
    </ul>
    <button class="boton-agregar-carro"data-id="${producto.id}">Agregar al carro</button>
</article>
    `
    })

    contenedorProductos.innerHTML = productosHTML

    return productosHTML

}

export {
    renderizarCatalogo
}


//funcion de filtrado 
function filtrarPorTalle(arreglo,talle) {
    //return arreglo.filter((producto)=>{
   //     const talles = producto.talles.filter((talleEncontrado)=>{
 //           return talleEncontrado === talle
//
//        })
//      return talles.length
 //})   
 //indexOf 
 //includes()
 //este return es de la funcion filtrarportalle
 return arreglo.filter((producto)=>{
    //debe ser verdadero o falso
    return producto.talles.includes(talle)
 })
}

export {renderizarCatalogo, filtrarPorTalle}
