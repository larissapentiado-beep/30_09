const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');GIT 

async function main() {
  const rl = readline.createInterface({ input, output });
  const numCalculos = await rl.question('Quantos cálculos deseja realizar? ');
  const numCalculosInt = parseInt(numCalculos);

  for (let i = 1; i <= numCalculosInt; i++) {
    console.log(`\nCálculo ${i}:`);
    const num1 = await rl.question('Digite o primeiro número: ');
    const num2 = await rl.question('Digite o segundo número: ');

    const num1Int = parseInt(num1);
    const num2Int = parseInt(num2);

    const soma = num1Int + num2Int;
    const subtracao = num1Int - num2Int;
    const multiplicacao = num1Int * num2Int;
    const divisao = num1Int / num2Int;

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
  }

  rl.close();
}
main();