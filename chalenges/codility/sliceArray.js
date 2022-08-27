function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let sums = []
  let max = 0
  let total = 0

  if (A.length < 2){
      return 0
  }

  for (let i = 0 ; i < A.length-1; i++){
      sums.push(A[i]+ A[i+1])
  }

  for (let s of sums){
      max = Math.max(0,max+s)
      total = Math.max(total,max)
  }

  return total


}