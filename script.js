let computerChoice;
let playerChoice;

let computerScore = 0;
let playerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let outcome = document.getElementById('outcome');

let Rock = document.getElementById('Rock').addEventListener('click', play);
let Paper = document.getElementById('Paper').addEventListener('click', play);
let Scissors = document.getElementById('Scissors').addEventListener('click', play);

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let username = prompt("Hey Pirate! What is your name?");


function play() {
    playerChoice = this.innerText;
    computerInput();
    compare();
}

function computerInput() {
    var dice = Math.random();
    if (dice <= 0.34) {
        return computerChoice = "Rock";
    } else if (dice > 0.34 && dice <= 0.60) {
       return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}

function lost() {
    computerScore++;
    computerScore_span.innerText = computerScore;
}

function won() {
    playerScore++;
    userScore_span.innerText = playerScore;
}


function compare() {
    player.innerHTML = username +  " have chosen " + playerChoice;
    computer.innerHTML = "Computer chooses " + computerChoice;

    if (playerChoice === computerChoice) {
        outcome.innerHTML = "Nobody wins " + username + "!";
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        outcome.innerHTML = "Crap! " + username +  " You lost!";
        return lost;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        outcome.innerHTML = username + " you won! Hooray!";
        return won;
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        outcome.innerHTML = "Well done! " + username;
        return won;
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        outcome.innerHTML = "Defeated! " + username + "!";
        return lost;
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        outcome.innerHTML = "Oh noooo " +  username + " you lost!";
        return lost;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        outcome.innerHTML = "KING! You won!";
        return won;
    }
}

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function changeName(){
    document.getElementById("user-label").innerText = username;
}
changeName ();

