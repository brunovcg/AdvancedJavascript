function multiplyChar(char, times){
  let result = ''
  for (let i = 1; i <= times; i++){
    result += char
  }
  return result
}


function staircase(n) {
  let array = []
  let iterator = n-1
  for (let i = 1; i <=n; i++){
    let line = multiplyChar(' ', iterator) + multiplyChar('#', i)
    array.push(line)
    iterator--
  }

  array.forEach(item=>console.log(item))
}
staircase(4)

