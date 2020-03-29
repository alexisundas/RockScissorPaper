var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboad_div = document.querySelector(".score-board");
const result_p = document.querySelector("#result");
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissor_div = document.getElementById('Scissor');


function getComputerChoice() {
    const choices = ['Rock','Scissor','Paper'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function draw(userChoice,computerChoice) {
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = userChoice + " beats " + computerChoice + " . It's a Draw!";
    document.getElementById(userChoice).classList.add("gray-glow")
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")},1000);
}


function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = userChoice + " beats " + computerChoice + " . You Lose!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")},1000);
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = userChoice + " beats " + computerChoice + " . You Win!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")},1000);
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userChoice,computerChoice);
            break;
        case "RockPaper":
        case "ScissoRrock":
        case "PaperScissor":
            lose(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice,computerChoice);
            break;

    }
        

}


function main(){

    rock_div.addEventListener('click',() => game('Rock'));

    scissor_div.addEventListener('click',() => game('Scissor'));

    paper_div.addEventListener('click',() => game('Paper'));

}

main()