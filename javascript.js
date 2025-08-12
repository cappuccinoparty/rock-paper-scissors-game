//Main Program

getComputerChoice() //Check if it's working properly
console.log(getHumanChoice())



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
    console.log(userChoice)
    let uppercaseUserChoice = userChoice.toUpperCase() //changing to uppercase to remove case-sensitivity later when determining winner
    return uppercaseUserChoice
}

// Milestone 3: Set up variables to keep track of score
//initialize scores to start at 0
let computerScore = 0 
let humanScore = 0
let computerChoice //declaring a variable to get the computer's random answer
let computerRoundAnswer
let userRoundAnswer

// Milestone 4: Play 1 round of game, keeping track of score 
function playRound(){
    //Component 4.1: Get Computer's Choice
    computerRoundAnswer = getComputerChoice()

    //Component 4.2: Get User's Choice
    userRoundAnswer = getHumanChoice()

    //Component 4.3: Determine winner


}



//Milestone: Create algorithm for determining winner
//Determine combination and designate winner 
function determineWinner(computerRoundAnswer, userRoundAnswer){
    //determine winner for combination ROCK and ROCK 
    if (computerRoundAnswer == "ROCK") and (userRoundAnswer == "ROCK") {
        console.log("This round is a tie!")   
    }
    
    //determine winner for combination ROCK and PAPER 
    elseif (computerRoundAnswer == "ROCK") and (userRoundAnswer == "PAPER") {
        console.log("You won this round!")
        humanScore += 1
           
    }
    
    //determine winner for combination ROCK and SCISSORS 
    elseif (computerRoundAnswer == "ROCK") and (userRoundAnswer == "SCISSORS") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }

    //determine winner for combination PAPER and ROCK 
    elseif (computerRoundAnswer == "PAPER") and (userRoundAnswer == "ROCK") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }
    
    //determine winner for combination PAPER and PAPER    
    else if (computerRoundAnswer == "PAPER") and (userRoundAnswer == "PAPER") {
        console.log("This round is a tie!")   
    }

    //determine winner for combination PAPER and SCISSORS
    
    elseif (computerRoundAnswer == "PAPER") and (userRoundAnswer == "SCISSORS") {
        console.log("You won this round!")
        humanScore += 1
           
    }

    //determine winner for combination SCISSORS and ROCK    

    elseif (computerRoundAnswer == "SCISSORS") and (userRoundAnswer == "ROCK") {
        console.log("You won this round!")
        humanScore += 1
           
    }

    //determine winner for combination SCISSORS and PAPER  
    elseif (computerRoundAnswer == "SCISSORS") and (userRoundAnswer == "PAPER") {
        console.log("The computer won this round!")
        computerScore += 1
           
    }  

    //determine winner for combination SCISSORS and SCISSORS    
    else if (computerRoundAnswer == "SCISSORS") and (userRoundAnswer == "SCISSORS") {
        console.log("This round is a tie!")   
    }

}



//Milestone 5: Play full game (5 rounds) and announce winner