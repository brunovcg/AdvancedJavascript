function* test (i) {

 let b = i

  yield b

  yield b + 1
}

const a = test(10)
console.log(a.next().value)

console.log(a.next().value)