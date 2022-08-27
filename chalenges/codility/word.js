function solution(S) {

  let output = S.split('')
  function cutIt (word) {
     let gotOne = false
      for (let i = 0; i < word.length ; i++){
      
              if (word[i] === word[i+1]){
                  word.splice(i, 2)
                  gotOne = true
                  break
              }
      }
      if (!gotOne){
          return word.join('')
      } 
         return cutIt(word)
  }
 return cutIt(output)
}

console.log(solution('ACCAABBC'))