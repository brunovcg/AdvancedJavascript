function getDiagonal (arr, side){
  let number = 0
  let lastPosition = arr[0].length-1
      for (let i = 0; i < arr.length; i++){
          if (side==="right"){
              number += arr[i][i]
          } else {  
              number += arr[i][lastPosition]
              lastPosition -= 1
          }
      } 
  return number
}


function getRange (num1, num2){
  let sorted = [num1, num2].sort((a,b)=> a-b )
  let result = []
  for (let i = sorted[0]; i < sorted[1]; i++ ){
      result.push(i)
  }
  return result.length
}

function diagonalDifference(arr) {
  let rightDiagonal = getDiagonal(arr, "right")
  let leftDiagonal = getDiagonal(arr, "left")
  return getRange(rightDiagonal, leftDiagonal)
}

<div>
  <label for="">Texto</label>
  <input id="meu input"/>
</div> 