function divisibleSumPairs(n, k, ar) {
  let options = []
  for (let i = 0; i < n; i++){
      for (let y = 1; y < n; y++ ){
        if (ar[i] && ar[y] && (i<y)){
          options.push([ar[i], ar[y]])
      }
      }
  }
 
 let a =  options.map(item=> item.reduce((a,b)=> a+b,0) % k === 0  ) .filter(item=> item=== true).length 
  console.log( a)
}




divisibleSumPairs(6,3 , [1, 3, 2, 6, 1, 2])