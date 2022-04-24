function normalFunction(){
    console.log('Hello2')
    console.log('World2')
}

normalFunction()

function* generatorFunction(){

    yield 'hello'
    yield 'world'

}

const generatorObject = generatorFunction()

console.log(generatorObject)

for (const word of generatorObject){
    console.log(word)
}

