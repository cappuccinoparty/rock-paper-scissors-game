// --- Functions and intermediary steps --- 

// Milestone 1: Get the computer choice (rock, paper or scissors)
function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber < ((1/3)*100)){
        ComputerChoice = "Rock"
    } else if (randomNumber > ((2/3)*100)){
        ComputerChoice = "Paper"
    }  else {
        ComputerChoice = "Scissors"
    }
    let uppercaseComputerChoice = ComputerChoice.toUpperCase() //changing to uppercase to remove case-sensitivity later when determining winner
    return uppercaseComputerChoice
}



// Milestone 2: Get the user's choice (rock, paper or scissors)
function getHumanChoice() {
    let userChoice = prompt("Would you like to play rock, paper, or scissors?", "rock")
    let uppercaseUserChoice = userChoice.toUpperCase() //changing to uppercase to remove case-sensitivity later when determining winner
    return uppercaseUserChoice
}

// Milestone 3: Set up variables to keep track of score
//initialize scores to start at 0
let computerScore = 0 
let humanScore = 0
let computerChoice //declaring a variable to get the computer's random answer
let computerRoundAnswer 
let humanRoundAnswer

// Milestone 4: Play 1 round of game, keeping track of score 
function playRound(){
    //Get Computer's answer for round
    computerRoundAnswer = getComputerChoice()

    //Get human answer  for round
    humanRoundAnswer = getHumanChoice()

    //Component 4.1: Determine winner, increase winner's score counter by 1, and publish round results
    determineWinner(computerRoundAnswer,humanRoundAnswer)

}



//Milestone: Create algorithm for determining winner
//Determine winner, add score to winner, and indicate score after round
function determineWinner(computerRoundAnswer, humanRoundAnswer){
    //tell user what was played
    console.log("The computer chose: ", computerRoundAnswer)
    console.log("You chose: ",humanRoundAnswer)
    //determine winner for combination ROCK and ROCK 
    if (computerRoundAnswer == "ROCK" && humanRoundAnswer == "ROCK") {
        console.log("This round is a tie!")   
    }
    
    //determine winner for combination ROCK and PAPER 
    else if (computerRoundAnswer == "ROCK" && humanRoundAnswer == "PAPER") {
        console.log("You won this round!")
        humanScore += 1
           
    }
    
    //determine winner for combination ROCK and SCISSORS 
    else if (computerRoundAnswer == "ROCK" && humanRoundAnswer == "SCISSORS") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }

    //determine winner for combination PAPER and ROCK 
    else if (computerRoundAnswer == "PAPER" && humanRoundAnswer == "ROCK") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }
    
    //determine winner for combination PAPER and PAPER    
    else if (computerRoundAnswer == "PAPER" && humanRoundAnswer == "PAPER") {
        console.log("This round is a tie!")   
    }

    //determine winner for combination PAPER and SCISSORS
    
    else if (computerRoundAnswer == "PAPER" && humanRoundAnswer == "SCISSORS") {
        console.log("You won this round!")
        humanScore += 1
           
    }

    //determine winner for combination SCISSORS and ROCK    

    else if (computerRoundAnswer == "SCISSORS" && humanRoundAnswer == "ROCK") {
        console.log("You won this round!")
        humanScore += 1
           
    }

    //determine winner for combination SCISSORS and PAPER  
    else if (computerRoundAnswer == "SCISSORS" && humanRoundAnswer == "PAPER") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }  

    //determine winner for combination SCISSORS and SCISSORS    
    else if (computerRoundAnswer == "SCISSORS" && humanRoundAnswer == "SCISSORS") {
        console.log("This round is a tie!")   
    }
    console.log("Your score after this round is: ", humanScore)
    console.log("The computer's score after this round is: ", computerScore)

}



//Milestone 5: Play full game (5 rounds) and announce winner
function playGame(){
    //use for loop to play five rounds of the game
    for (let i = 0; i < 5; i++) {
        playRound()

    // Determine winner of overall game
    

    // Announce winner of overall game

    // Announce final scores



}
}




// --- Main Program --- 

playGame(computerRoundAnswer, humanRoundAnswer)
console.log(computerScore)
console.log(humanScore)

