// ! CALL - Consegue receber atributos da instancia

const article = {
  title: 'Descomplicando call, apply e bind',
  language: 'JavaScript',
};

function print() {
  console.log(`${this?.title} em ${this?.language}.`); 
}

print();

// undefined em undefined.

print.call(article);

// Descomplicando call, apply e bind em JavaScript.

// ! Apply - Igual ao Call mas recebe um array como 2o param e no 1o o que vai no this

function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(5, [2, 7]) // 14


//!   Bind - funciona de uma maneira diferente do call e do apply, ao invés de executar uma função, 
//!   este retorna uma nova função. O seu primeiro parâmetro continua recebendo o valor que será atribuído ao
//!   this e os demais argumentos serão os parâmetros que definirão os valores atribuídos da primeira função.

function sumNumbers2(firstNumber,secondNumber = 0) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
}

const bindResultFunction = sumNumbers2.bind(5)

bindResultFunction(5) // 10
bindResultFunction(5,2) // 12

// ! Arrow Functions não possuem um escopo para o this. Em vez disso, elas passam para um próximo nível de execução.

const article2 = {
	title: 'Descomplicando call, apply e bind em JavaScript',
	regularFunction: function() {
		console.log(this.title);
	},
	arrowFunction: () => {
		console.log(this?.title);
	}
}

article2.regularFunction(); // "Descomplicando call, apply e bind em JavaScript"

article2.arrowFunction(); // undefined


// !  Porém, em determinados cenários pode ser útil utilizar arrow functions enquanto o this faz referência ao contexto externo.


class  Article {
	constructor() {
		this.title  =  'Descomplicando call, apply e bind em JavaScript'
		
		this.arrowFunction();
	}

	arrowFunction  = () => {
		console.log(this.title);
	}
}

new  Article() // Descomplicando call, apply e bind em JavaScript