const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  const quantidade = Number(await rl.question('Quantos cálculos você deseja realizar? '));

  for (let i = 1; i <= quantidade; i++) {
    console.log(`\n=== Cálculo ${i} ===`);

    const numero1 = Number(
      await rl.question('Digite o primeiro número: ')
    );

    const numero2 = Number(
      await rl.question('Digite o segundo número: ')
    );

    console.log(`Soma: ${numero1 + numero2}`);
    console.log(`Subtração: ${numero1 - numero2}`);
    console.log(`Multiplicação: ${numero1 * numero2}`);

    if (numero2 !== 0) {
      console.log(`Divisão: ${numero1 / numero2}`);
    } else {
      console.log('Divisão: não é possível dividir por zero.');
    }
  }

  rl.close();
  console.log('\nPrograma finalizado.');
}

main();