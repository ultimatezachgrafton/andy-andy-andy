const slackAndy = document.getElementById('slack-andy').addEventListener('click', run); // rock
const githubAndy = document.getElementById('github-andy').addEventListener('click', run); // paper
const quarantineAndy = document.getElementById('quarantine-andy').addEventListener('click', run); // scissors

let computerChoice;
let playerChoice;

const playerAnnouncement = document.getElementById('playerAnnouncement');
const computerAnnouncement = document.getElementById('computerAnnouncement');
const result = document.getElementById('result');

function run() {
    playerChoice = this.innerText;
    computerTurn();
    declareVictor();
}

function computerTurn() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
      return computerChoice = "Slack Andy";
  } 
  if (random === 1) {
      return computerChoice = "Github Andy";
  }
  computerChoice = "Quarantine Andy";
}

function declareVictor() {
    playerAnnouncement.innerHTML = "YOU HAVE CHOSEN: " + playerChoice;
    computerAnnouncement.innerHTML = "YOUR FRIEND <b>THE COMPUTER</b> HAS CHOSEN: " + computerChoice;

    const slackAndyLosesToGithubAndy = playerChoice === "Slack Andy" && computerChoice === "Github Andy";
    const githubAndyLosesToQuarantineAndy = playerChoice === "Github Andy" && computerChoice === "QuaantineAndy"
    const quarantineAndyLosesToSlackAndy = playerChoice === "Quarantine Andy" && computerChoice === "Slack Andy"

    if (slackAndyLosesToGithubAndy || githubAndyLosesToQuarantineAndy || quarantineAndyLosesToSlackAndy) {
        return result.innerHTML = "YOU CHOSE POORLY. YOUR LIFE IS FORFEIT.";
    }

    if ((playerChoice === "Slack Andy" && computerChoice === "Quarantine Andy")
        || (playerChoice === "Github Andy" && computerChoice === "Quarantine Andy")
        || (playerChoice === "Quarantine Andy" && computerChoice === "Github Andy")) {
            return result.innerHTML = "WITH THIS VICTORY YOU HAVE STAVED OFF THE SINGULARITY FOR ANOTHER PRECIOUS NANOSECOND.";
        }

    result.innerHTML = "YOU AND YOUR FRIEND HAVE TIED. IT IS UNSATISFYING.";
}