let computerChoice;
let playerChoice;

let computerScore = 0;
let playerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let outcome = document.getElementById('outcome');

let diamond = document.getElementById('diamond').addEventListener('click', play);
let paper = document.getElementById('paper').addEventListener('click', play);
let swords = document.getElementById('swords').addEventListener('click', play);

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
        return computerChoice = "diamond";
    } else if (dice > 0.34 && dice <= 0.60) {
       return computerChoice = "paper";
    } else {
        return computerChoice = "swords";
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
    } else if (playerChoice === "diamond" && computerChoice === "paper") {
        outcome.innerHTML = "Crap! " + username +  " You lost!";
        return lost;
    } else if (playerChoice === "diamond" && computerChoice === "swords") {
        outcome.innerHTML = username + " you won! Hooray!";
        return won;
    } else if (playerChoice === "paper" && computerChoice === "diamond") {
        outcome.innerHTML = "Well done! " + username;
        return won;
    } else if (playerChoice === "paper" && computerChoice === "sword") {
        outcome.innerHTML = "Defeated! " + username + "!";
        return lost;
    } else if (playerChoice === "swords" && computerChoice === "sword") {
        outcome.innerHTML = "Oh noooo " +  username + " you lost!";
        return lost;
    } else if (playerChoice === "swords" && computerChoice === "paper") {
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

