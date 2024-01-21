let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaConsole() {
  console.log('O botão foi clicado');
}

function verificaAlerta() {
  alert('Eu amo JS')
}

function verificaPrompt() {
  let cidade = prompt('Informe o nome de uma cidade do Brasil');
  alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificaSoma() {
  let n1 = parseInt(prompt('Informe o primero número:'));
  let n2 = parseInt(prompt('Informe o segundo número:'));
  let total = n1 + n2;
  alert(`A soma de ${n1} + ${n2} = ${total}`)
}