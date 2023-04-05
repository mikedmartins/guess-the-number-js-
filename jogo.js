// Gera um número aleatório entre 1 e 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Armazena o número de tentativas restantes
var remainingGuesses = 10;

// Função que verifica o palpite do usuário
function checkGuess() {
  // Obtém o valor digitado pelo usuário
  var userGuess = parseInt(document.getElementById("guessInput").value);

  // Verifica se o valor é válido
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("message").innerHTML = "Por favor, digite um número entre 1 e 100.";
    return;
  }

  // Verifica se o usuário acertou o número
  if (userGuess === randomNumber) {
    document.getElementById("message").innerHTML = "Parabéns, você acertou!";
    return;
  }

  // Verifica se o usuário tem tentativas restantes
  remainingGuesses--;
  if (remainingGuesses === 0) {
    document.getElementById("message").innerHTML = "Acabaram suas tentativas! O número era " + randomNumber + ".";
    return;
  }

  // Verifica se o palpite do usuário é maior ou menor que o número secreto
  var message = "Tente novamente. Você tem " + remainingGuesses + " tentativas restantes.";
  if (userGuess < randomNumber) {
    message += " O número que estou pensando é maior.";
  } else {
    message += " O número que estou pensando é menor.";
  }
  document.getElementById("message").innerHTML = message;
}
