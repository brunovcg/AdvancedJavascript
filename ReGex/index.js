//!       g       Global (encontra todas as ocorrências)
//!       i       insensitive (não checa letras upper x lowercase)
//!      ( )      grupos
//!       |       ou
//!       \       caractere de escape
//!   {min,max}     quantidade de vezes varivael
//!      {n}      quantidade especifica
//!       .       qualquer caractere menos quebra de espace
//!      []       Conjunto
//!       ^       usado para negar
//!    min-max       range

//! ------- FUNÇÕES ------- (Métodos String)
//!     search - Retorna o índice ou -1 caso não haja
//!     split - divide o texto usando regex
//!     match - se usada com a flag g, retora um array com os achadossem o g volta um array que nem exec
//!     replace -  substitui o primeiro param pelo segundo

//! ------- QUANTIFICADORES --------
//!    * (opc)  0 ou n significa {1,}
//!    + (obg)  1 ou n
//!    ? (opc)  0 ou 1

const printAula = 5;

// ? ------------------------- AULA1 ------------------
//* exec e test

const texto = `O texto dissertativo é um dos estilos de escrita mais exigidos nos concursosem vestibulares e outras provas.
No Exame Nacional do Ensino Médio (Enem)por exemploos candidatos são submetidos à uma redação dissertativo-argumentativaque é um dos tipos de dissertação.
Escrever um bom texto dissertativo exige domínio da língua portuguesa e capacidade de apresentar as informações seguindo uma linha lógica.
Afinalo leitor precisa ter clara compreensão sobre o que está sendo transmitidode forma que não exista ruídos e ou qualquer dificuldade de interpretação.
Éde fatoum desafio.
Por issono próprio Enemque São poucos os candidatos QUUE conquistam a nota máxima.`;

const regExp1 = /(poucos|são)/gi;

const found = regExp1.exec(texto);

if (printAula === 1) {
  console.log(found);
}

// ? --------------------------- AULA2 ---------------------------
//* replace
const regExp2 = /são|que/gi;

if (printAula === 2) {
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
const regExp3 = /qu+eu?/gi;

const array = [
  "beuno.jpg",
  "bruno.JPG",
  "errado.png",
  "gouvei.JPEG",
  "campos.jpeg",
];

const regExp4 = /\.jpeg|\.jpg/gi;
//ou
const regExp5 = /\.(jpeg|jpg)/gi;
//ou
const regExp6 = /\.(jpe?g)/gi;
//ou
const regExp7 = /\.jpe{0,}g/gi;
//ou
const regExp8 = /\.((jp|JP)(e|E)?(g|G))/g

if (printAula === 3) {
  console.log(texto.match(regExp3));

  for (const n of array) {
    //teste alterar o regExp!
    const valido = n.match(regExp8);

    if (!valido) {
      continue;
    }

    console.log(n, valido);
  }
}

// ? ---------------------------- AULA4 ---------------------------
//* Versão greedy e não greedy

const html = "<p>Olá</p> <p>Olá de novo</p>"


if (printAula===4){

console.log(html.match(/<.+>.+<\/.+>/g)) // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // não greedy

}

// ? ---------------------------- AULA5 ---------------------------
//* conjuntos e ranges

// [abc] -> Conjunto 
// [^abc]-> negacao

const alfa = "abcdefghijklmnopqrstuvwxyz 0123456789 @ ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alfa2 = "zabcdefghijklmnopqrstuvwxy 0123456789 @®; ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const bruno = "bruno"

if (printAula ===5){

  console.log(alfa)
  // acha e divide num array cada um
  console.log(alfa.match(/[abc]/g))
  //acha em sequencia
  console.log(alfa.match(/[abc123]+/g))
  //negando ^
  console.log(alfa.match(/[^abc123]/g)) 


  //range junto
  console.log(alfa.match(/[0-9]+/g))
  console.log(alfa.match(/[a-z]+/g))
  //range separado array
  console.log(alfa.match(/[0-9]/g))
  console.log(alfa.match(/[a-z]/g))
  console.log(alfa2.match(/[a-z]/g))
  console.log(bruno.match(/[a-z]/g))

  // varios range
  console.log(alfa.match(/[a-zA-Z0-9]+/g))
  console.log(alfa.match(/[a-zA-Z0-9]/g))

  console.log(alfa.match(/[^a-zA-Z0-9]+/g)) //negando


  //  \w = a-zA-Z0-9
  console.log(alfa.match(/[\w]/g)) 
  console.log(alfa.match(/[\u0040-\u0041]+/g)) // unicode



}

