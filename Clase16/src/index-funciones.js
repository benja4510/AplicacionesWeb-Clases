//Funciones


//Declaracion

//function suma(a,b){
//console.log(a + b)
//return a + b  
//}

//invocar / ejecutar / llamar 
//const resultado  = suma(10,2)

//console.log(resultado)


//Funcion flecha -> anonima 
//fat arrow

//const resta  = (a,b)=>{
//return a - b 
// }


//const resta = (a,b)=> a + b
//
//const resta = a => a + 5

//Callback

const a = () => {
    console.log('se ejecuto a')

    cb('Hola')

}

// nuestro callback
const b = () => {
    console.log('se ejecuto el callback b'+ saludo)
}

//console.log(b())
a(b)

a(()=>{
     console.log('se ejecuto el callback b')
})

