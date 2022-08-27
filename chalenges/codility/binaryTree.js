
function solution(T) {
  let height = 0
  let temp = 0
  if(T==null){
      return height};
  temp++
  function tryIt (x) {   
      if (x.r){
          temp++
          return tryIt(x.r)
      } else {
          if (temp > height){
              height = temp
          } 
          temp=0
      }
      if (x.l){
           temp++
          return tryIt(x.l)
      } else {
          if (temp > height){
              height = temp
          } 
          temp=0
      }
      if (!x.l && !x.r){
          return height
      }  
  }
return tryIt(T)
}




function solution(T) {
  if (T.l == null && T.r == null){
      return 0
  }
   
  else if (T.l == null){
      return 1 + solution(T.r)
  }

  else if (T.r == null){
      return 1 + solution(T.l)
  }
     
  else{
      return 1 + Math.max(solution(T.l), solution(T.r))
  }


}