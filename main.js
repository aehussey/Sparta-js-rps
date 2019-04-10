

function startGame() {
  alert("Welcome to Rock, Paper, Scissors. It's you vs the computer, best of 5 wins")
}

function playGame() {
  var humanChoice = prompt("What will it be? Rock, Paper or Scissors?");
    if (humanChoice.toLowerCase() != "rock" && humanChoice != "paper" && humanChoice != "scissors")
    {var humanChoice = prompt("What will it be? Rock, Paper or Scissors? - Make sure you spell it correctly!");
    return humanChoice}
  else {return humanChoice;}
}

function compChoice() {
  min = Math.ceil(0);
  max = Math.floor(3);

  return Math.floor(Math.random() * (3 - 0)) + 0;

}


function compWord (compNumb) {
  var cmpWord;
  if (compNumb == 0)
    {cmpWord = "rock"}
  else if (compNumb == 1)
    {cmpWord = "paper"}
  else if (compNumb == 2)
    {cmpWord = "scissors"}
    console.log(cmpWord);
  return cmpWord;

}

function humChoiceToNumber(humChoice) {

  var humNumb;
  if (humChoice == "rock")
    {humNumb = 0}
  else if (humChoice == "paper")
    {humNumb = 1}
  else if (humChoice == "scissors")
    {humNumb = 2}

  return humNumb
}

function winner(humNumb, compNumb) {



  if (humNumb == compNumb) {
    alert("The computer chose " + compWord(compNumb) + ". That was a tie.")
  }

  else if ((compNumb == 0 && humNumb == 1) || (compNumb == 1 && humNumb == 2) || (compNumb == 2 && humNumb == 0)) {
    alert("The computer chose " + compWord(compNumb) + ". You won this round!")
    humPoints ++;
  }
  else {
    alert("The computer chose " + compWord(compNumb) + ". The computer won this round.")
    compPoints ++
  }
  currentScore(humPoints, compPoints);

}

function currentScore(humPoints, compPoints) {
  alert("The computer has " + compPoints + " and you have " + humPoints + " points.")
}

function gameDuration() {
  compPoints = 0
  humPoints = 0

  while (compPoints < 3 && humPoints < 3) {
    winner(humChoiceToNumber(playGame()), compChoice());

  }

}

startGame();
gameDuration();
