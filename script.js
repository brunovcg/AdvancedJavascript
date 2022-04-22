let arr = [1,2,3,4,5];


// ---------- FOR EACH

function callback(item){
  console.log(item)
}

function callback2(item){
  console.log(item+1)
}



function myForEach (array, funcao){

  for (let i=0; i<array.length; i++){

    funcao(array[i])
  }

}

// -------------MAP------

function mapCALLBACK (item) {
 return item *2
}


let getMAP = arr.map(item=>mapCALLBACK(item))
//ou
let getMAP2 = arr.map(item=>item*2)


function myMAP (array, callback) {
  let result = []
  for (let i=0; i<array.length; i++){

    result.push(callback(array[i]))

  }
  return result
}

console.log(getMAP)
console.log(getMAP2)
console.log(myMAP(arr, mapCALLBACK))