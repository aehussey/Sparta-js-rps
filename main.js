

function startGame() {
  alert("Welcome to Rock, Paper, Scissors. It's you vs the computer, best of 5 wins")
}

function playGame() {
  var humanChoice = prompt("What will it be? Rock, Paper or Scissors?");
  return humanChoice.toLowerCase();
}

function compChoice() {
  min = Math.ceil(0);
  max = Math.floor(3);
  console.log(Math.floor(Math.random() * (3 - 0)) + 0);
  return Math.floor(Math.random() * (3 - 0)) + 0;

}

function humChoiceToNumber(humChoice) {

  var humNumb;
  if (humChoice == "rock")
    {humNumb = 0}
  else if (humChoice == "paper")
    {humNumb = 1}
  else if (humChoice == "scissors")
    {humNumb = 2}
    console.log(humNumb);
  return humNumb
}

function winner() {}



startGame();
humChoiceToNumber(playGame());
compChoice();
