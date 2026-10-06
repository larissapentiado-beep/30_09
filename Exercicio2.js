
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
async function main() {
  const rl = readline.createInterface({ input, output });
  let continuar;
  do {
    const num1 = Number(await rl.question("Digite o primeiro número: "));
    const num2 = Number(await rl.question("Digite o segundo número: "));

    console.log("Soma:", num1 + num2);
    console.log("Subtração:", num1 - num2);
    console.log("Multiplicação:", num1 * num2);
    console.log("Divisão:", num1 / num2);

    continuar = await rl.question("Deseja continuar? (s/n): ");
  } while (continuar.toLowerCase() === 's');

  rl.close();
}

main();
