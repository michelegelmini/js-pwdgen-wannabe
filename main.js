const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Qual è il tuo colore preferito?');
const firstNumber = prompt('Scegli un numero');
const secondNumber = prompt('Scegli un secondo numero');

const output = `${firstName}${lastName}${color}${firstNumber / secondNumber}`

console.log(output);

document.getElementById('password-generated').innerHTML = output;