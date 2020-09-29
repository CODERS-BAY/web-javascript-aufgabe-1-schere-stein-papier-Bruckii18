var symbolComputer;
var symbolPlayer;
var roundCount = 1;
var computerWins = 0;
var playerWins = 0;
var winCondition = 3;

var symbolArray = ["Rock", "Scissors", "Paper"]

document.getElementById("wincount").innerHTML = "First who reaches " + winCondition + " wins!";



function reset() {
    roundCount = 1;
    computerWins = 0;
    playerWins = 0;
    document.getElementById("round").innerHTML = "Round: " + roundCount;
    document.getElementById("computercount").innerHTML = computerWins;
    document.getElementById("playercount").innerHTML = playerWins;
    document.getElementById("result").innerHTML = "";
    document.getElementById("info").innerHTML = "";
}
function selectRock() {
    if (computerWins < winCondition && playerWins < winCondition) {
        roundCount++;
        var randomNumber = Math.floor(Math.random() * symbolArray.length);
        symbolComputer = symbolArray[randomNumber];
        symbolPlayer = ("Rock");
        if (symbolPlayer == symbolComputer) {
            document.getElementById("info").innerHTML = "You both picked " + symbolComputer + "! Try again";
        } else {
            if (symbolComputer == "Paper") {
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! He gained 1 point!";
                computerWins++;
            } else if (symbolComputer == "Scissors") {
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! You gained 1 point!";
                playerWins++;
            }
        }
        document.getElementById("round").innerHTML = "Round: " + roundCount;
        document.getElementById("computercount").innerHTML = computerWins;
        document.getElementById("playercount").innerHTML = playerWins;
        if (playerWins == winCondition) {
            document.getElementById("result").innerHTML = "Poggers! You Won!"
        }
        else if (computerWins == winCondition) {
            document.getElementById("result").innerHTML = "Feelsbad! You Lost!"
        }
    }
}

function selectScissors() {
    if (computerWins < winCondition && playerWins < winCondition) {
        roundCount++;
        var randomNumber = Math.floor(Math.random() * symbolArray.length);
        symbolComputer = symbolArray[randomNumber];
        symbolPlayer = ("Scissors");
        if (symbolPlayer == symbolComputer) {
            document.getElementById("info").innerHTML = "You both picked " + symbolComputer + "! Try again";
        } else {
            if (symbolComputer == "Rock") {
                computerWins++;
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! He gained 1 point!";
            } else if (symbolComputer == "Paper") {
                playerWins++;
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! You gained 1 point!";
            }
        }
        document.getElementById("round").innerHTML = "Round: " + roundCount;
        document.getElementById("computercount").innerHTML = computerWins;
        document.getElementById("playercount").innerHTML = playerWins;
        if (playerWins == winCondition) {
            document.getElementById("result").innerHTML = "Poggers! You Won!"
        }
        else if (computerWins == winCondition) {
            document.getElementById("result").innerHTML = "Feelsbad! You Lost!"
        }
    }
}

function selectPaper() {
    if (computerWins < winCondition && playerWins < winCondition) {
        roundCount++;
        var randomNumber = Math.floor(Math.random() * symbolArray.length);
        symbolComputer = symbolArray[randomNumber];
        symbolPlayer = ("Paper");
        if (symbolPlayer == symbolComputer) {
            document.getElementById("info").innerHTML = "You both picked " + symbolComputer + "! Try again";
        } else {
            if (symbolComputer == "Scissors") {
                computerWins++;
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! He gained 1 point!";
            } else if (symbolComputer == "Rock") {
                playerWins++;
                document.getElementById("info").innerHTML = "Computer picked " + symbolComputer + "! You gained 1 point!";
            }
        }
        document.getElementById("round").innerHTML = "Round: " + roundCount;
        document.getElementById("computercount").innerHTML = computerWins;
        document.getElementById("playercount").innerHTML = playerWins;
        if (playerWins == winCondition) {
            document.getElementById("result").innerHTML = "Poggers! You Won!"
        }
        else if (computerWins == winCondition) {
            document.getElementById("result").innerHTML = "Feelsbad! You Lost!"
        }
    }
}