//!             g       Global (encontra todas as ocorrências)
//!             i       insensitive (não checa letras upper x lowercase)
//!             m       multiline (checa por linha)
//!            ( )      grupos
//!             ?:      não conta o grupo como retrovisor
//!             |       ou
//!             \       caractere de escape
//!         {min,max}   quantidade de vezes varivael
//!            {n}      quantidade especifica
//!             .       qualquer caractere menos quebra de espace
//!            [ ]       Conjunto
//!            [^]      usado para negar (tudo menos isso) quando num conjunto
//!             ^       começa com (inicio da string)
//!             $       termina com (inicio da string)
//!          min-max    range
//!         $1 $2 $3    retrovisores
      
//?       ------- FUNÇÕES ------- (Métodos String)
//!           search    Retorna o índice ou -1 caso não haja
//!           split     divide o texto usando regex
//!           match     se usada com a flag g, retora um array com os achadossem o g volta um array que nem exec
//!           replace   substitui o primeiro param pelo segundo
      
//?       ------- QUANTIFICADORES --------
//!             *       (opc) 0 ou n significa {1,}
//!             +       (obg) 1 ou n
//!             ?       (opc) 0 ou 1
      
//* List of unicode characters:  https://en.wikipedia.org/wiki/List_of_Unicode_characters
//* Documentation for Regex for JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

const printAula = 9;

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
  // to colocando aspas aqui, substituindo ele por ele com aspas
  console.log(texto.replace(/(que)/gi, "'$1'"));

  console.log("2------x---------");

  console.log(texto.replace(/(que)|(isso)/gi, " zzz$1zzz xxx$2xxx "));
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
const regExp8 = /\.((jp|JP)(e|E)?(g|G))/g;

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

// greedy = é padrão
// não greedy = usando o ?, vai selecionar o mínimo possível

const html = "<p>Olá</p> <p>Olá de novo</p>";

if (printAula === 4) {
  console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
  console.log(html.match(/<.+?>.+?<\/.+?>/g)); // não greedy
}

// ? ---------------------------- AULA5 ---------------------------
//* conjuntos e ranges

// [abc] -> Conjunto
// [^abc]-> negacao

const alfa =
  "abcdefghijklmnopqrstuvwxyz 0123456789 @ ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alfa2 =
  "zabcdefghijklmnopqrstuvwxy 0123456789 @®; ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bruno = "bruno";

if (printAula === 5) {
  console.log(alfa);
  // acha e divide num array cada um
  console.log(alfa.match(/[abc]/g));
  //acha em sequencia
  console.log(alfa.match(/[abc123]+/g));
  //negando ^
  console.log(alfa.match(/[^abc123]/g));

  //range junto
  console.log(alfa.match(/[0-9]+/g));
  console.log(alfa.match(/[a-z]+/g));
  //range separado array
  console.log(alfa.match(/[0-9]/g));
  console.log(alfa.match(/[a-z]/g));
  console.log(alfa2.match(/[a-z]/g));
  console.log(bruno.match(/[a-z]/g));

  // varios range
  console.log(alfa.match(/[a-zA-Z0-9]+/g));
  console.log(alfa.match(/[a-zA-Z0-9]/g));

  console.log(alfa.match(/[^a-zA-Z0-9]+/g)); //negando

  //  \w = a-zA-Z0-9
  console.log(alfa.match(/[\w]/g));
  console.log(alfa.match(/[\u0040-\u0041]+/g)); // unicode
}

// ? ---------------------------- AULA6 ---------------------------

if (printAula === 6) {
  const cpf = `
  Os CPFs são:
  
  254.224.877-45
  
  333.333.871-22
  
  124.333.423-22
  
  333.333.471-22
  `;

  const IPs = `
  0.0.0.0

  192.168.0.25

  10.01.5.12

  2555.255.255.255
  `;

  console.log(cpf.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));

  //ou

  console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));

  // ou

  console.log(cpf.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

  console.log("---- problema 2------");

  const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;

  const ipRegExp2 =
    /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
  // for (let i = 0; i < 300; i++){
  //   const ip = `${i}.${i}.${i}.${i}`
  //   console.log(ip, ip.match(ipRegExp))
  // }

  console.log(IPs.match(ipRegExp2));
}

// ? ---------------------------- AULA7 ---------------------------

if (printAula === 7) {
  const cpf7 = `254.224.877-45
  215.978.456-12
  047.258.369-96
  963.987.32a.00`;

  const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

  console.log(cpf7.match(cpfRegExp)); // vai dar null se não tiver o m- multiline por que a string tem que ser igual a isso
}

// ? ---------------------------- AULA8 ---------------------------

// $1 $2 $3 -. retrovisores, variaveis ex: html

if (printAula === 8) {
  const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

  //.*? => qualquer coisa greedy, não pega quebra de linha

  console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));

  // gambiarra que faz pegar HTML com quebra de linha
  console.log(html2.match(/<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/g));

  // fazendo um coisa complexa

  console.log(
    html2.replace(
      /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,
      "$1 HAHA $3 HAHA $4"
    )
  );
}

// ? ---------------------------- AULA9 ---------------------------

if (printAula === 9) {
  const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

  console.log(lookahead);

  // console.log(lookahead.match(/.+[^in]active$/gim))

  //? POSITIVE LOOK AHEAD

  //Positive look ahead (frases que tem active)
  console.log(lookahead.match(/.+(?=[^in]active)/gim));

  //Positive look ahead (frases que tem inactive)
  console.log(lookahead.match(/.+(?=inactive)/gim));

  //? NEGATIVE LOOK AHEAD

  //Negative look ahead (frases que não tem active)
  console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

  //Negative look ahead (frases que não tem inactive)
  console.log(lookahead.match(/^(?!.+inactive).+$/gim));

  //? POSITIVE LOOK BEHIND

  //Positive look behind (frases que começam com ONLINE)
  console.log(lookahead.match(/.+(?<=ONLINE\s+)\S+.*/gim));

  //? NEGATIVE LOOK BEHIND
  // Negative lookbehind (Frases que NÃO começam com ONLINE)
  console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));


  const cpf9 = `089.234.897-90
  111.111.111-11
  234.553.244-44
  `
  console.log(cpf9.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));
}

