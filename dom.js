var slackAndy = document.getElementById('slack-andy').addEventListener('click', run); // rock
var githubAndy = document.getElementById('github-andy').addEventListener('click', run); // paper
var quarantineAndy = document.getElementById('quarantine-andy').addEventListener('click', run); // scissors

var computerChoice;
var playerChoice;

var playerAnnouncement = document.getElementById('playerAnnouncement');
var computerAnnouncement = document.getElementById('computerAnnouncement');
var result = document.getElementById('result');

function run() {
    playerChoice = this.innerText;
    computerTurn();
    declareVictor();
}

function computerTurn() {
  var random = Math.floor(Math.random() * 3);
  if (random === 0) {
      computerChoice = "Slack Andy";
  } else if (random === 1) {
      computerChoice = "Github Andy";
  } else {
      computerChoice = "Quarantine Andy";
  }
}

function declareVictor() {
    playerAnnouncement.innerHTML = "YOU HAVE CHOSEN: " + playerChoice;
    computerAnnouncement.innerHTML = "YOUR FRIEND <b>THE COMPUTER</b> HAS CHOSEN: " + computerChoice;

    if (playerChoice == computerChoice) {
        result.innerHTML = "YOU AND YOUR FRIEND HAVE TIED. IT IS UNSATISFYING.";
        
    } else if (playerChoice === "Slack Andy" && computerChoice === "Github Andy") {
        result.innerHTML = "YOU CHOSE POORLY. YOUR LIFE IS FORFEIT.";
    } else if (playerChoice === "Slack Andy" && computerChoice === "Quarantine Andy") {
        result.innerHTML = "WITH THIS VICTORY YOU HAVE STAVED OFF THE SINGULARITY FOR ANOTHER PRECIOUS NANOSECOND.";

    } else if (playerChoice === "Github Andy" && computerChoice === "Slack Andy") {
        result.innerHTML = "WITH THIS VICTORY YOU HAVE STAVED OFF THE SINGULARITY FOR ANOTHER PRECIOUS NANOSECOND.";
    } else if (playerChoice === "Github Andy" && computerChoice === "Quarantine Andy") {
        result.innerHTML = "YOU CHOSE POORLY. YOUR LIFE IS FORFEIT."; 

    } else if (playerChoice === "Quarantine Andy" && computerChoice === "Slack Andy") {
        result.innerHTML = "YOU CHOSE POORLY. YOUR LIFE IS FORFEIT.";
    } else if (playerChoice === "Quarantine Andy" && computerChoice === "Github Andy") {
        result.innerHTML = "WITH THIS VICTORY YOU HAVE STAVED OFF THE SINGULARITY FOR ANOTHER PRECIOUS NANOSECOND.";
    }
}