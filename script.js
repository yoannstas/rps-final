let computerChoice;
let playerChoice;

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let outcome = document.getElementById('outcome');

let diamond = document.getElementById('diamond').addEventListener('click', play);
let paper = document.getElementById('paper').addEventListener('click', play);
let swords = document.getElementById('swords').addEventListener('click', play);

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

    function play() {
        playerChoice = this.innerText;
        computerInput();
        compare();
    }

    function computerInput() {
        let dice = Math.random();
        if (dice <= 0.34) {
            return computerChoice = "diamond";
        } else if (dice > 0.34 && dice <= 0.67) {
            return computerChoice = "paper";
        } else {
            return computerChoice = "swords";
        }
    }

        function compare() {
            player.innerHTML = username + " has chosen " + playerChoice;
            computer.innerHTML = "Computer has chosen " + computerChoice;

            if (playerChoice === computerChoice) {
                outcome.innerHTML = "Nobody wins " + username + "!";
            } else if (playerChoice === "diamond" && computerChoice === "paper") {
                outcome.innerHTML = "Crap! " + username + " You lost!";
            } else if (playerChoice === "diamond" && computerChoice === "swords") {
                outcome.innerHTML = username + " you won! Hooray!";
            } else if (playerChoice === "paper" && computerChoice === "diamond") {
                outcome.innerHTML = "Well done! " + username;
            } else if (playerChoice === "paper" && computerChoice === "swords") {
                outcome.innerHTML = "Defeated! " + username + "!";
            } else if (playerChoice === "swords" && computerChoice === "diamond") {
                outcome.innerHTML = "Oh noooo " + username + " you lost!";
            } else if (playerChoice === "swords" && computerChoice === "paper") {
                outcome.innerHTML = "KING! You won!";

            }
}
let username = prompt("Hey Pirate! What is your name?");

let d = new Date();
let time = d.getHours();

if (time < 12) {
    document.getElementById("welcome").innerHTML =
        ("Good morning " + username +". Choose your weapon and beat Haddock the mighty pirate!");
}
if (time > 12) {
    document.getElementById("welcome").innerHTML =
        ("Good afternoon " + username +". Choose your weapon and beat Haddock the mighty pirate!");
}
if (time > 18) {
    document.getElementById("welcome").innerHTML =
        ("Good evening " + username +". Choose your weapon and beat Haddock the mighty pirate!");
}
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

