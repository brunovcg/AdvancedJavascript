var _ = require('lodash');
var v8 = require("v8")


console.log("---- OBJETO normal -------")

let carro = {nome : "vectra", idade: 33}
let carro2 = carro

carro2.nome = "audi"

console.log(carro)
console.log(carro2)


console.log("---- OBJETO usando lodash -------")

let pessoa = {nome : "bruno", idade: 33}
let pessoa2 = _.cloneDeep(pessoa)

pessoa2.nome = "Brenda"

console.log(pessoa)
console.log(pessoa2)


console.log("---- ARRAY normal -------")

let moveis = ["sofa", "mesa"]
let moveis2 = moveis

moveis2[0] = "cadeira"

console.log(moveis)
console.log(moveis2)

console.log("---- ARRAY usando lodash -------")

let paises = ["brasil", "argentina"]
let paises2 = _.cloneDeep(paises)

paises2[0] = "portugal"

console.log(paises)
console.log(paises2)


console.log("---- OBJETO usando V8 -------")

let cidade = {nome: "recife", uf: "PE"}

const structuredClone = obj => {
    return v8.deserialize(v8.serialize(obj));
  };

  let cidade2 = structuredClone(cidade)

  cidade2.nome = "petrolina"

  console.log(cidade)
  console.log(cidade2)