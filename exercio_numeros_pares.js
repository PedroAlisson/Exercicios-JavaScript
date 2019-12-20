
// 2 Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const pares = vetor.filter(function(itemprimo , somaprimo){
    return itemprimo % 2 == 0
})

console.log("Numero Pares:", pares)