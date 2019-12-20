const vetor = [1,2,3,4,5];

// a funçao reduce precisa de 2 parametros dentro da funçao

// 1 - Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const acumulator = vetor.reduce(function(item,soma){
    return item+soma
},0)

console.log('Somatorio é:',acumulator)