//console.log('Hola JS')// -imprime por consola

//tipado
//const nombre = 'Andres'
//nombre  = 'Jose'

//let nombre='Andres'
//nombre='Jose'
//nombre=1
//console.log(typeof nombre)

//let  esMayordeEdad = true

//operadores
//aritmecticos

const edad = 25
const mayoriaEdad = 18

const aumentoEdad = edad + 1

//console.log(ahmentoEdad)


//logicos
//let esMayordeEdad = edad <= mayoriaEdad
let esMayordeEdad = edad >= mayoriaEdad
console.log(esMayordeEdad)


//estructura control -> de bucle    

//for (let i = 0; i < 10; i++) {
// console.log(i)
//}

//Arreglos
const numeros = [1, 2, 3, 4, 5, 6]
const numeros2 = [1, 2, 3, 4, 5, 6]

//console.log(numeros[2])
//numeros[2] = 5


//for (let i = 0; i < numeros.length; i++) {
//  console.log(numeros[i])
//}


//Objetos 

const persona = {
    // propiedad : valor 
    edad: 20,
    estudia: true,
    nombre: "Andres",
    redes:[
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        pasatiempo: 'pintar',
        mascotas: 2 
    },
    caminar: function name(params) {
        //
    }
}

persona.nacionalidad = 'Argentina'

console.log (persona.redes[1])
console.log (persona.otros.pasatiempo)


