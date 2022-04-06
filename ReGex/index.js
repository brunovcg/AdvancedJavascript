//*   g  - Global (encontra todas as ocorrências)
//*   i  - insensitive (não checa letras upper x lowercase)
//*  ( ) - grupos
//*   |  - ou 


const texto =`O texto dissertativo é um dos estilos de escrita mais exigidos nos concursos, em vestibulares e outras provas.
No Exame Nacional do Ensino Médio (Enem), por exemplo, os candidatos são submetidos à uma redação dissertativo-argumentativa, que é um dos tipos de dissertação.
Escrever um bom texto dissertativo exige domínio da língua portuguesa e capacidade de apresentar as informações seguindo uma linha lógica.
Afinal, o leitor precisa ter clara compreensão sobre o que está sendo transmitido, de forma que não exista ruídos e ou qualquer dificuldade de interpretação.
É, de fato, um desafio.
Por isso, no próprio Enem, são poucos os candidatos que conquistam a nota máxima.`


const regExp1 = /(poucos|são)/gi;



const found = regExp1.exec(texto)

console.log(found)

// console.log(regExp1.test(texto))