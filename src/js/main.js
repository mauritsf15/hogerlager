// Creating variables

let computerNumberOne;
let computerNumberTwo;
let computerTotal;
let clientNumberOne;
let clientNumberTwo;
let clientTotal;
let bank = 100;
let stakes = 0;
let wins = 0;
let winAmount = 0;
let losses = 0;
let lossAmount = 0;
let choice;
const clientDiv = document.getElementById("rollClient");
const computerDiv = document.getElementById("rollComputer");
const resultsDiv = document.getElementById("resultsDiv");

// Hide client division

clientDiv.style.display = "none"
resultsDiv.style.display = "none"

// Update Stats

function updateStats() {
    document.getElementById("bank").innerHTML = bank
    document.getElementById("wins").innerHTML = wins
    document.getElementById("winAmount").innerHTML = winAmount
    document.getElementById("losses").innerHTML = losses
    document.getElementById("lossAmount").innerHTML = lossAmount
    document.getElementById("stakes").setAttribute('max', bank)
}

updateStats()

// Computer rolls 2 numbers between 1 and 6.
// The two outcomes show on the front-end.

function rollComputer() {
    computerNumberOne = Math.floor(Math.random() * 6) + 1
    computerNumberTwo = Math.floor(Math.random() * 6) + 1
    computerTotal = computerNumberOne + computerNumberTwo
    document.getElementById("computerNumberOne").innerHTML = computerNumberOne
    document.getElementById("computerNumberTwo").innerHTML = computerNumberTwo
    document.getElementById("computerTotal").innerHTML = computerTotal
    computerDiv.style.display = "none";
    clientDiv.style.display = "block";
}

// Client rolls 2 numbers.
// Choice being True = higher, False = lower.

function rollClient() {
    choice = document.querySelector('input[name="choice"]:checked').value;
    stakes = parseInt(document.getElementById('stakes').value)
    clientNumberOne = Math.floor(Math.random() * 6) + 1
    clientNumberTwo = Math.floor(Math.random() * 6) + 1
    clientTotal = clientNumberOne + clientNumberTwo
    document.getElementById("clientNumberOne").innerHTML = clientNumberOne
    document.getElementById("clientNumberTwo").innerHTML = clientNumberTwo
    document.getElementById("clientTotal").innerHTML = clientTotal
    if (computerTotal > clientTotal && choice == "higher" || clientTotal > computerTotal && choice == "lower") {
        bank -= stakes
        losses += 1
        lossAmount += stakes
        document.getElementById("result").innerHTML = "You lost!"
    } else if (computerTotal > clientTotal && choice == "lower" || clientTotal > computerTotal && choice == "higher") {
        bank += stakes
        wins += 1
        winAmount += stakes
        document.getElementById("result").innerHTML = "You won!"
    } else {
        document.getElementById("result").innerHTML = "It's a tie!"
    }
    resultsDiv.style.display = "block"
    clientDiv.style.display = "none"
    updateStats()
}

function replay() {
    resultsDiv.style.display = "none"
    computerDiv.style.display = "block"
    document.getElementById("computerNumberOne").innerHTML = ""
    document.getElementById("computerNumberTwo").innerHTML = ""
    document.getElementById("computerTotal").innerHTML = ""
    document.getElementById("clientNumberOne").innerHTML = ""
    document.getElementById("clientNumberTwo").innerHTML = ""
    document.getElementById("clientTotal").innerHTML = ""
}