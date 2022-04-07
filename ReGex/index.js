//!   g  - Global (encontra todas as ocorrências)
//!   i  - insensitive (não checa letras upper x lowercase)
//!  ( ) - grupos
//!   |  - ou
//!   \  - caractere de escape
//! {n,m} - quantidade de vezes varivael
//!  {n} - quantidade especifica

//! ------- FUNÇÕES ------- (Métodos String)
//!     search - Retorna o índice ou -1 caso não haja
//!     split - divide o texto usando regex
//!     match - se usada com a flag g, retora um array com os achados, sem o g volta um array que nem exec
//!     replace -  substitui o primeiro param pelo segundo

//! ------- QUANTIFICADORES --------
//!    * (opc)  0 ou n significa {1,}
//!    + (obg)  1 ou n
//!    ? (opc)  0 ou 1


const printAula = 3;

// ? ------------------------- AULA1 ------------------
//* exec e test

const texto = `O texto dissertativo é um dos estilos de escrita mais exigidos nos concursos, em vestibulares e outras provas.
No Exame Nacional do Ensino Médio (Enem), por exemplo, os candidatos são submetidos à uma redação dissertativo-argumentativa, que é um dos tipos de dissertação.
Escrever um bom texto dissertativo exige domínio da língua portuguesa e capacidade de apresentar as informações seguindo uma linha lógica.
Afinal, o leitor precisa ter clara compreensão sobre o que está sendo transmitido, de forma que não exista ruídos e ou qualquer dificuldade de interpretação.
É, de fato, um desafio.
Por isso, no próprio Enem, que São poucos os candidatos QUUE conquistam a nota máxima.`;

const regExp1 = /(poucos|são)/gi;

const found = regExp1.exec(texto);

if (printAula===1){
  console.log(found)

}

// ? --------------------------- AULA2 ---------------------------
//* replace
const regExp2 = /são|que/gi;

if ((printAula === 2)) {
  console.log(texto.match(regExp2));
  console.log("1------x---------");
  // usando grupo
  console.log(texto.replace(/(que)/gi, "'$1'"));
  console.log("2------x---------");
  console.log(texto.replace(/(que)(isso)/gi, "'$1 - $2'"));
  console.log("3------x---------");

  // usando callback
  console.log(texto.replace(/(que)/gi, (input) => input.toUpperCase()));
}

// ? ---------------------------- AULA3 ---------------------------
//* quantificadores

//  + acha quuuuuue - quantos u forem na position, já do seguno u não pega
//. ? deixa o último u opcional
//   . é um meta caracter em JS, para ser ponto literal tem que usar \
const regExp3 = /qu+eu?/gi


const array = [
  "beuno.jpg",
  "bruno.JPG",
  "errado.png",
  "gouvei.JPEG",
  "campos.jpeg",
  
]

const regExp4 = /\.jpeg|\.jpg/gi
//ou
const regExp5 = /\.(jpeg|jpg)/gi
//ou
const regExp6 = /\.(jpe?g)/gi
//ou
const regExp7 = /\.jpe{0,}g/gi


if (printAula===3) {

  console.log(texto.match(regExp3))

  for (const n of array){

    const valido = n.match(regExp7)
    
    if (!valido) {continue};

    console.log(n, valido)

  }
} 