const GAMETOOLS = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return GAMETOOLS[Math.floor(Math.random() * GAMETOOLS.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection) playerSelection = playerSelection.toLowerCase();
  let winMessage = "You Win!!";
  let loseMessage = "You Lose!!";
  let rock = "Rock breaks Scissors!!";
  let paper = "Paper wraps Rock!!";
  let scissors = "Scissors cuts Paper!!";

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return {
      message: winMessage + " " + rock,
      result: "win",
    };
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return {
      message: loseMessage + " " + rock,
      result: "lose",
    };
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return {
      message: winMessage + " " + paper,
      result: "win",
    };
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return {
      message: loseMessage + " " + paper,
      result: "lose",
    };
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return {
      message: winMessage + " " + scissors,
      result: "win",
    };
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return {
      message: loseMessage + " " + scissors,
      result: "lose",
    };
  }

  if (playerSelection === computerSelection) {
    return {
      message: "Oops!! It's a Draw!! Both chose " + playerSelection,
      result: "draw",
    };
  } else {
    return {
      message: "Invalid Choice",
      result: "NR",
    };
  }
};

const game = (rounds) => {
  let points = 0;
  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Enter your choice (rock/paper/scissors)");
    let computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    if (round.result === "win") points++;
    console.log(round.message);
  }
  return `You scored ${points} points.`;
};

console.log(game(3));
