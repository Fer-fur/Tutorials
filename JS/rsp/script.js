let playerChoice = "";
let choice = document.getElementById("choice");
let errorMsg = document.getElementById("error-text");
let result = document.getElementById("result");
let computerChoiceMsg = document.getElementById("computerChoice");
let choiceBtns = document.querySelectorAll(".choice-btn");

choiceBtns.forEach((choiceBtn => {
    choiceBtn.addEventListener("click", () => getPlayerChoice(choiceBtn));
}))

function getPlayerChoice(button) {
    // reset the text to default ""
    choice.textContent = "";
    computerChoiceMsg.textContent = "";

    // 
    playerChoice = parseInt(button.getAttribute('data-value'));
    choice.textContent = button.textContent;
    errorMsg.style.display = "none";
    result.textContent = "";
}

function getComputerChoice() {
    return (Math.floor(Math.random()*3))
}

function showResults(){
    if (playerChoice === "") {
        errorMsg.style.display = "block";
        errorMsg.textContent = "You have not select any choices"
        return
    }

    let computerChoice = getComputerChoice();

    switch (computerChoice) {
        case 0:
            computerChoiceMsg.textContent = "Computer has chosen Rock. "
            break;
        case 1: 
            computerChoiceMsg.textContent = "Computer has chosen Paper. "
            break;
        default:
            computerChoiceMsg.textContent = "Computer has chosen Scissor. "
    }

    result.textContent = computeResults(playerChoice,  computerChoice);
    return 
}

function computeResults(player, computer) {
    if ( player === computer) {
        return "Draw"
    } else if ( (player - computer) === 1 || (player - computer) === -2 ){
        return "You Won!"
    } else {
        return "You lost!"
    }
}