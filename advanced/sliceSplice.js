let a = [1,2,3,4,5,6,7,8]

// SPLICE MUDA o array


/* 
(indice inicio, primeiro indice que não pega, [opcional, colocar mais posiçoes, 
    que vai substituir os que sairam])
*/
let b = a.splice(0,2 )


console.log(a)
console.log(b)

// -----------------X--------------------


let c = ["a","b", "c", "d", "e", "f"]

// SLICE NÃO MUDA o array
let d = c.slice(0,2)

console.log(c)
console.log(d)