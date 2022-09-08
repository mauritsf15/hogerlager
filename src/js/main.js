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
const clientDiv = document.querySelector("#rollClient");
const computerDiv = document.querySelector("#rollComputer");
const resultsDiv = document.querySelector("#resultsDiv");

const rollClientBtn = document.querySelector('.rollClientBtn');
if (rollClientBtn) {
    rollClientBtn.addEventListener('click', clientBtnClick)
}

const rollComputerBtn = document.querySelector('.rollComputerBtn');
if (rollComputerBtn) {
    rollComputerBtn.addEventListener('click', rollComputer)
}

const replayBtn = document.querySelector('.replayBtn');
if (replayBtn) {
    replayBtn.addEventListener('click', replay)
}

// Checking validity of form

function clientBtnClick() {
    if (document.querySelector("#stakes").reportValidity() && document.querySelector("#higher").reportValidity()) {
        rollClient();
    }
}

// Hide client division

clientDiv.style.display = "none"
resultsDiv.style.display = "none"

// Update Stats

function updateStats() {
    document.querySelector("#bank").innerHTML = bank
    document.querySelector("#wins").innerHTML = wins
    document.querySelector("#winAmount").innerHTML = winAmount
    document.querySelector("#losses").innerHTML = losses
    document.querySelector("#lossAmount").innerHTML = lossAmount
    document.querySelector("#stakes").setAttribute('max', bank)
}

updateStats()

// Computer rolls 2 numbers between 1 and 6.
// The two outcomes show on the front-end.

function rollComputer() {
    computerNumberOne = Math.floor(Math.random() * 6) + 1
    computerNumberTwo = Math.floor(Math.random() * 6) + 1
    computerTotal = computerNumberOne + computerNumberTwo
    document.querySelector("#computerNumberOne").innerHTML = computerNumberOne
    document.querySelector("#computerNumberTwo").innerHTML = computerNumberTwo
    document.querySelector("#computerTotal").innerHTML = `(Total: ${computerTotal})`
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
    document.querySelector("#clientNumberOne").innerHTML = clientNumberOne
    document.querySelector("#clientNumberTwo").innerHTML = clientNumberTwo
    document.querySelector("#clientTotal").innerHTML = `(Total: ${clientTotal})`
    if (computerTotal > clientTotal && choice == "higher" || clientTotal > computerTotal && choice == "lower" || clientTotal != computerTotal && choice == "tie") {
        bank -= stakes
        losses += 1
        lossAmount += stakes
        document.querySelector("#result").innerHTML = "You lost!"
    } else if (computerTotal > clientTotal && choice == "lower" || clientTotal > computerTotal && choice == "higher") {
        bank += stakes
        wins += 1
        winAmount += stakes
        document.querySelector("#result").innerHTML = "You won!"
    } else if (computerTotal == clientTotal && choice == "tie") {
        bank += stakes * 10
        wins += 1
        winAmount += stakes * 10
        document.querySelector("#result").innerHTML = "You won!"
    } else {
        document.querySelector("#result").innerHTML = "Hmmm... something went wrong!"
    }
    resultsDiv.style.display = "block"
    clientDiv.style.display = "none"
    updateStats()
}

function replay() {
    resultsDiv.style.display = "none"
    computerDiv.style.display = "block"
    document.querySelector("#computerNumberOne").innerHTML = ""
    document.querySelector("#computerNumberTwo").innerHTML = ""
    document.querySelector("#computerTotal").innerHTML = ""
    document.querySelector("#clientNumberOne").innerHTML = ""
    document.querySelector("#clientNumberTwo").innerHTML = ""
    document.querySelector("#clientTotal").innerHTML = ""
}