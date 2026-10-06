const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  // 1. Criar a Interface
  const rl = readline.createInterface({ input, output });

  let acumulador = 's';

  while (acumulador.toLowerCase() === 's') {

    console.log('\n=== Calculadora Simples ===');

    const numero = Number(await rl.question('\nDigite o primeiro número: '));
    const operacao = await rl.question('Digite a operação (+, -, *, /): ');
    const numero2 = Number(await rl.question('Digite o segundo número: '));

    if (Number.isNaN(numero) || Number.isNaN(numero2)) {
      console.log('Erro: digite números válidos.');
      acumulador = await rl.question('\nDeseja tentar outro cálculo? (s/n): ');
      continue;
    }

    let resultado;

    switch (operacao) {
      case '+':
        resultado = numero + numero2;
        break;

      case '-':
        resultado = numero - numero2;
        break;

      case '/':
        if (numero2 === 0) {
          console.log('Erro: não é possível dividir por zero.');
          resultado = null;
        } else {
          resultado = numero / numero2;
        }
        break;

      case '*':
        resultado = numero * numero2;
        break;

      default:
        console.log('Erro: operação inválida.');
        resultado = null;
    }

    if (resultado !== null) {
      console.log(`Resultado: ${resultado}`);
    }

    acumulador = await rl.question('\nDeseja realizar outro cálculo? (s/n): ');
  }

  rl.close();
  console.log('Programa finalizado.');
}

main();