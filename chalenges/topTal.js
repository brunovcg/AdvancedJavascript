function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let planned = A.reduce((a,b)=> a+b,0)/2
  let filtered = 0
  let filters = 0
  A.sort((a,b)=> b-a)

  function compareNext(a1, a2){
      let  current = a1
      if (current>a2){
          filters++
          filtered += current/2
          compareNext(current/2,a2)
      }
  }

  for (let i = 0; i < A.length; i++){

      filters++
      let currentFiltration= A[i]/2
      filtered += currentFiltration

      if (filtered >= planned ){
          break
      }
      compareNext(currentFiltration, A[i+1])
  }
  return filters

}