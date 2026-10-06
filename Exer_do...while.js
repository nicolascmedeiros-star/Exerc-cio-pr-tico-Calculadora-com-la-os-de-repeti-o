const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  let acumulador = 's';

  do {

    console.log('\n=== Calculadora Simples ===');

    const numero = Number(await rl.question('\nDigite o primeiro número: '));
    const numero2 = Number(await rl.question('Digite o segundo número: '));

    console.log(`Soma: ${numero + numero2}`);
    console.log(`Subtração: ${numero - numero2}`);
    console.log(`Multiplicação: ${numero * numero2}`);

    if (numero2 === 0) {
      console.log('Divisão: não é possível dividir por zero.');
    } else {
      console.log(`Divisão: ${numero / numero2}`);
    }

    acumulador = await rl.question('\nDeseja realizar outro cálculo? (s/n): ');

  } while (acumulador.toLowerCase() === 's');

  rl.close();
  console.log('Programa finalizado.');
}

main();