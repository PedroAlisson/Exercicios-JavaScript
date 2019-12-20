// 3 Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

const primos = vetor.filter(function(itemprimo,somaprimo){
    return itemprimo % 2 != 0
})

console.log("Numeros primos:",primos)