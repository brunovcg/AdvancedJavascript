/**
 * @param {number[]} arr
 * @return {number[][]}
 */

 function diference(num1,num2){
    
  let max = Math.max(num1,num2)
  let min = Math.min(num1,num2)
  
  let count = 0
  
  while (min < max){
      count++
      min++
  }
  
  return count
  
}

var minimumAbsDifference = function(arr) {
  
  arr.sort((a,b)=> a -b)
  
  let result = []
  
  for (let i = 0 ; i < arr.length -1 ; i++){
      let tempArray = [arr[i]]
      let temp
      
      for (let y = i+ 1; y< arr.length;y++){
          
          if (!temp){
              temp = diference(arr[i],arr[y])
              tempArray.push(arr[y])
          } else {
              if(temp>diference(arr[i],arr[y])){
                  temp = diference(arr[i],arr[y])
                  tempIndex[1] = arr[y]
              }
                
          }
          
      }

      result.push(tempArray)
      
  }
  
  let minimum = Math.min(...result.map(item=> diference(item[0], item[1])))
  
  return result.filter(item=> diference(item[0],item[1])=== minimum)
};