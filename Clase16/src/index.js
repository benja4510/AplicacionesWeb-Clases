//Metodos de Arreglos
const numeros = [2, 8, 12, 50]

//ForEach --> loop 
// el callback se ejecuta una vez por elemento
//numeros.forEach((numero, indice, arreglo) => {
  //console.log(numero, indice, arreglo)
//})

// Map --> loop --> devuelve un nuevo arreglo

const numerosIncrementados = numeros.map((numero) => {
    return numero + 1
})

console.log(numerosIncrementados)

//Filter (nuevo arreglo) y Find (valor)

