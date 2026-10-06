const readline = require('node:readline/promises'); // Corrigido de 'redline' para 'readline'
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  while (true) {
    const num1 = Number(await rl.question("Digite o primeiro número: "));
    const num2 = Number(await rl.question("Digite o segundo número: "));

    console.log("Soma:", num1 + num2);
    console.log("Subtração:", num1 - num2);
    console.log("Multiplicação:", num1 * num2);
    console.log("Divisão:", num1 / num2);

    const continuar = await rl.question("Deseja continuar? (s/n): ");
    if (continuar.toLowerCase() !== 's') {
      break;
    }
  }

  rl.close();
}

main();
