let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log (`O Vetor tem ${num.length} Posições.`)
console.log(`O Primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == undefined) {
    console.log(`O Valor não foi encontrado`)
}
else {
    console.log(`O valor 8 está na posição ${pos}`)
}


