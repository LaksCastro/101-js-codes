// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Júlio César usava um sistema de criptografia, agora conhecido como Cifra de César, que trocava cada letra pelo equivalente em duas posições à Esquerda no alfabeto (por exemplo, 'C' vira 'A', 'T' vira 'R', etc.). Ao começo do alfabeto nós voltamos para o fim, isto é 'A' vira 'Y'. Nós podemos, é claro, tentar trocar as letras com quaisquer número de posições.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste é composto por duas linhas. A primeira linha contém uma string com até 50 caracteres maiúsculos ('A'-'Z'), que é a sentença após ela ter sido codificada através desta Cifra de César modificada. A segunda linha contém um número que varia de 0 a 25 e que representa quantas posições cada letra foi deslocada para a direita.

// Saída
// Para cada caso de teste de entrada, imprima uma linha de saída com o texto decodificado (transformado novamente para o texto original) conforme as regras acima e o exemplo abaixo.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

for (let caseInd = 0; caseInd < cases; caseInd++) {
  const str = lines.shift();
  const key = Number(lines.shift());

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    let newCode = code - key;

    if (newCode < 65) newCode = 91 - (65 - newCode);

    newStr += String.fromCharCode(newCode);
  }

  console.log(newStr);
}
