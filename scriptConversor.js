function converter() {
    let numero = document.getElementById("numero").value.trim(); // .trim() Remove espaços em branco
    let baseIn = parseInt(document.getElementById("base-in").value);
    let resultado = "";

    // Validação de entrada para evitar erros

    if (baseIn === 2 && !/^[01]+$/.test(numero)) { // BaseIn indica a base selecionada e o restante ta na Legenda
        resultado = "Por favor, insira um número binário válido (apenas 0s e 1s).";
        document.getElementById("resultado").innerHTML = resultado;
        return;
    }
    if (baseIn === 10 && isNaN(numero)){ // BaseIn indica a base selecionada e o isNaN se é um numero válido
        resultado = "Por favor, insira um número decimal válido (apenas 0-9).";
        document.getElementById("resultado").innerHTML = resultado;
        return;
    }
    if (baseIn === 8 && !/^[0-7]+$/.test(numero)) { // BaseIn indica a base selecionada e o restante ta na Legenda
        resultado = "Por favor, insira um número octal válido (apenas 0-7).";
        document.getElementById("resultado").innerHTML = resultado;
        return;
    }
    if (baseIn === 16 && !/^[0-9A-Fa-f]+$/.test(numero)) { // BaseIn indica a base selecionada e o restante ta na Legenda
        resultado = "Por favor, insira um número hexadecimal válido (apenas 0-9 e A-F).";
        document.getElementById("resultado").innerHTML = resultado;
        return;
    }

    // Conversões

    if (baseIn === 10) {
        resultado += `Binário: ${parseInt(numero).toString(2)}<br>`;
        resultado += `Octal: ${parseInt(numero).toString(8)}<br>`;
        resultado += `Hexadecimal: ${parseInt(numero).toString(16).toUpperCase()}<br>`;
    } 
    else if (baseIn === 2) {
        resultado += `Decimal: ${parseInt(numero, 2)}<br>`;
        resultado += `Octal: ${parseInt(numero, 2).toString(8)}<br>`;
        resultado += `Hexadecimal: ${parseInt(numero, 2).toString(16).toUpperCase()}<br>`;
    } 
    else if (baseIn === 8) {
        resultado += `Decimal: ${parseInt(numero, 8)}<br>`;
        resultado += `Binário: ${parseInt(numero, 8).toString(2)}<br>`;
        resultado += `Hexadecimal: ${parseInt(numero, 8).toString(16).toUpperCase()}<br>`;
    } 
    else if (baseIn === 16) {
        resultado += `Decimal: ${parseInt(numero, 16)}<br>`;
        resultado += `Binário: ${parseInt(numero, 16).toString(2)}<br>`;
        resultado += `Octal: ${parseInt(numero, 16).toString(8)}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

/*
    LEGENDAS:


  !: Inverte o resultado da expressão. Se for verdadeiro, torna-se falso, e vice-versa.

  /.../: Delimita o início e o fim da expressão regular.

  ^: Indica o início da string. Garante que a correspondência comece no primeiro caractere.

  []: Define um conjunto de caracteres permitidos. Ex: [01] apenas 0 e 1; [0-7] de 0 até 7; [0-9A-Fa-f] de 0 até 9 e de A até F (tanto maiúsculo quanto minúsculo)

  +: Indica que deve haver um ou mais dos caracteres definidos no conjunto anterior ('0' ou '1').

  $: Indica o final da string. Garante que a correspondência termine no último caractere.
  
 .test(numero): Método que verifica se a string 'numero' atende à expressão regular.
  Retorna:
    - true: se 'numero' é válido de acordo com a expressão regular.
    - false: se 'numero' não é válido.
  
  Exemplo:
    Se a expressão regular for /^[0-9A-Fa-f]+$/ e 'numero' for "1A3":
      .test(numero) retorna true (válido).
    Se 'numero' for "1G3":
      .test(numero) retorna false (inválido).

    .toUpperCase(): Serve pra deixar as letras maiúsculas
    
*/
