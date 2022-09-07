const compChoice = ['Rock' , 'Paper' , 'Scissors']

const totalScore = {'computerScore' : 0,
    'playerScore':0
}

const getComputerChoice = () => {
    let num = Math.floor(Math.random() * compChoice.length)
    return compChoice[num];
}

const getResult = (playerChoice, computerChoice) => {
    let score;
    if (playerChoice === computerChoice) {
        score = 0
    
      
      } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    
      } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
    
      } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
      } else {
        score = -1
      }
      return score

}



function showResult(score, playerChoice, computerChoice) {
    const scoreBoard = document.getElementById('player-score')
    const hand = document.getElementById('hands')
    const result = document.getElementById('result')
    scoreBoard.innerText = `Our Score🤸‍♂️: ${totalScore['playerScore']}` 
    hand.innerText = `👨 ${playerChoice} vs  🤖 ${computerChoice}`
    if(score == 1){
        result.innerText = "You Win!"
    }
    else if(score == -1){
        result.innerText = "You Lose!"
    }
    else{
        result.innerText = "It's a Draw!"
    }
}


function onClickRPS(playerChoice) {
  let comChoice = getComputerChoice()
  let scores = getResult(playerChoice,comChoice)
  if(scores == 1){
    totalScore['playerScore'] +=scores
  }else{
    totalScore['computerScore'] -=scores
  }
  console.log(totalScore);
  showResult(scores, playerChoice , comChoice)
}



function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => { rpsButton.onclick = () => onClickRPS(rpsButton.value) })
    let endGames = document.getElementById('endGameButton')
    endGames.onclick = () => endGame()
}



function endGame() {
    const scoreBoard = document.getElementById('player-score')
    const hand = document.getElementById('hands')
    const result = document.getElementById('result')
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    scoreBoard.innerText = ""
    hand.innerText =""
    result.innerHTML = ""
}

playGame()