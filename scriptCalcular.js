function calcular() {
    let num1 = document.getElementById('num1').value.trim(); // Obtem o valor do n1 no html
    let num2 = document.getElementById('num2').value.trim(); // Obtem o valor do n2 no html 
    let baseCalculo = parseInt(document.getElementById('base-calculo').value); // Obtem o valor da base para calculo
    let operacao = document.getElementById('operacao').value; // Obtem a operação desejada

    // Converter os números de entrada para inteiros
    let decimal1 = Math.floor(parseInt(num1, baseCalculo)); // Garantindo que seja inteiro usando o Math.floor que arredonda o numero pra baixo sem deixar sobras
    let decimal2 = Math.floor(parseInt(num2, baseCalculo)); // Garantindo que seja inteiro usando o Math.floor que arredonda o numero pra baixo sem deixar sobras

    let resultadoDecimal;

    switch (operacao) {
        case 'soma':
            resultadoDecimal = decimal1 + decimal2;
            break;
        case 'subtracao':
            resultadoDecimal = decimal1 - decimal2;
            break;
        case 'multiplicacao':
            resultadoDecimal = decimal1 * decimal2;
            break;
        case 'divisao':
            if (decimal2 === 0) {
                document.getElementById('resultadoCalc').innerText = "Erro: Divisão por zero.";
                return;
            }
            resultadoDecimal = Math.floor(decimal1 / decimal2); // Divisão inteira
            break;
        default:
            resultadoDecimal = 0;
    }

    // Conversões para diferentes bases
    const resultadoBinario = resultadoDecimal.toString(2);
    const resultadoOctal = resultadoDecimal.toString(8);
    const resultadoHexadecimal = resultadoDecimal.toString(16).toUpperCase();

    // Exibir resultados sem casas decimais
    document.getElementById('resultadoCalc').innerHTML = `
        <strong>Resultados:</strong><br>
        Binário: ${resultadoBinario} <br>
        Octal: ${resultadoOctal} <br>
        Decimal: ${resultadoDecimal} <br>
        Hexadecimal: ${resultadoHexadecimal}
    `;
}


/*

    Legandas:

  Estrutura switch:
  Usada para executar diferentes blocos de código com base no valor de uma expressão.
 
  - `case`: Define um valor a ser comparado; se houver correspondência, o código correspondente é executado.
  - `break`: Interrompe a execução do switch após um case ser encontrado, evitando que outros cases sejam executados (fall-through).
  - `default`: Opcional; executado se nenhum case corresponder à expressão.

  
 */
