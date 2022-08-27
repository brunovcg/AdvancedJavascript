function sumAll (array) {
  return array.reduce((a,c)=> a + c,0)
}

function miniMaxSum(arr) {
 
let sorted = arr.sort((a,b)=> a-b)
let min = [...sorted]
let max = [...sorted]
min.pop()
max.shift()

console.log(sumAll(min), sumAll(max))

}

miniMaxSum([1,2,3,4,5])