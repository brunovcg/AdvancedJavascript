function pageCount(n, p) {
    
  let nEven = n %2 === 0
  let fromFront = [0,1]
  let fromBack = nEven ? [n,n+1] :[n-1,n]
  let back = 0
  let front = 0
  
  const finder=(array)=>{
      return array.includes(p)
  }
  
  while (!finder(fromBack) && !finder(fromFront))
   {
      back++
      front++
      fromFront[0] += 2
      fromFront[1] += 2
      fromBack[0] -= 2
      fromBack[1] -= 2  
  } 
return Math.min(back,front)
}