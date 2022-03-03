
const sum= (num1, num2)=> {console.log( num1+num2)}

const timeOutId = setTimeout(sum,1000, 1,2)

clearTimeout(timeOutId) 
/* não sera exibido no console:
limpar para liberar memoria e tambem prevenir 
codigo executar incorretamente quando o 
component for desmontados*/


const interval = setInterval(sum,200,1,2)

/* vai ficar rodando para sempre se não for parado,
 o que pode dar propblema de memoria */

clearInterval(interval)


setTimeOut(function run(){
    console.log("Hello")
    setTimeout(run,100)
},100)

/* 
É melhor usar setTimOut Recursivamente do que usar setInterval,
garante melhor os intervalos
melhor explicação no Notion
*/