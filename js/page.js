// variables
var cpu_score = 0;
var player_score = 0;
var player_output;
var cpu_output;

// assuming [0] = rock, [1] = paper, [2] = scissors
var options = document.getElementsByClassName("option");
var cpu_output_text = document.getElementsByClassName("cpu_output");
var player_output_text = document.getElementsByClassName("player_output");
var cpu_score_text = document.getElementsByClassName("cpu_score");
var player_score_text = document.getElementsByClassName("player_score");
var game_results_text = document.getElementsByClassName("game-results");


// functions
function initPage() {
  for(var i = 0; i < 3; i++) {
    options[i].addEventListener("click", selectOption);
  }
}

function selectOption(e) {
  cpuOption();
  console.log("debug cpu_output: " + cpu_output);
  player_output = e.target.id;

  console.log("player chose: " + player_output);

  calcScore();
  printScore();
}

function cpuOption() {
  rand = Math.floor(Math.random() * 3);

  switch(rand) {
    case 0:
      cpu_output = "rock";
      break;
    case 1:
      cpu_output = "paper";
      break;
    case 2:
      cpu_output = "scissors";
      break;
    default:
      console.log("ERROR: reached default case for random number selection");
  }
  console.log("cpu chose: " + cpu_output + " (number: " + rand + ")");
}

function calcScore() {
  switch(player_output)
  {
    case "rock":
      switch(cpu_output)
      {
        case "rock":
          game_results_text[0].textContent= "tie!!";
          break;
        case "paper":
          game_results_text[0].textContent= "cpu wins";
          cpu_score += 1;
          break;
        case "scissors":
          game_results_text[0].textContent= "player wins";
          player_score += 1;
          break;
        default:
          console.log("player: rock, cpu: reached default");
          break;
      }
      break;

    case "paper":
      switch(cpu_output)
      {
        case "rock":
          player_score += 1;
          game_results_text[0].textContent= "player wins";
          break;
        case "paper":
          game_results_text[0].textContent= "tie!!";
          break;
        case "scissors":
          cpu_score += 1;
          game_results_text[0].textContent= "cpu wins";
          break;
        default:
          console.log("player: paper, cpu: reached default");
          break;
      }
      break;

    case "scissors":
      switch(cpu_output)
      {
        case "rock":
          cpu_score += 1;
          game_results_text[0].textContent= "cpu wins";
          break;
        case "paper":
          player_score += 1;
          game_results_text[0].textContent= "player wins";
          break;
        case "scissors":
          game_results_text[0].textContent= "tie!!";
          break;
        default:
          console.log("aaaaaaaaaaaah x2.1");
          break;
      }
      break;

    default:
      console.log("player choice reached default???");
      break;
  }
  console.log("score: " + player_score + " | " + cpu_score);
}

function printScore() {
  cpu_score_text[0].textContent = cpu_score;
  player_score_text[0].textContent = player_score;
  player_output_text[0].textContent = player_output;
  cpu_output_text[0].textContent = cpu_output;
}

initPage();
