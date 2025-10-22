function getComputerChoice() {

  const r = Math.random(); 

  if (r < 1/3) return "rock";

  else if (r < 2/3) return "paper";

  else return "scissors";
}





/////////////////////////////////////////////////////////////////////


let ComputerScore = 0;
let HumanScore = 0;



function playRound(computerChoice, humanChoice){

    if(computerChoice === humanChoice){
         // it's a draw do nothing
    }else if(computerChoice == "rock" && humanChoice == "scissors"){
        ComputerScore += 1;
    }else if(computerChoice == "scissors" && humanChoice == "paper"){
        ComputerScore +=1;
    }else if(computerChoice == "paper" && humanChoice == "rock"){
        ComputerScore +=1;
    }else{
        HumanScore +=1;
    }                                                 

}


//////////////////////////////////////////////////////////////////////




function result(){

     document.querySelector('#result1').textContent = `Computer Choice ${computerChoice} : Your Scroe : ${HumanScore}  Computer Scroe: ${ComputerScore}`;
    
  if(ComputerScore == 5){
     document.querySelector('#final-result').textContent= "computer won";
  }else if( HumanScore == 5){
     document.querySelector('#final-result').textContent = "you won";
  }

}



document.querySelector('#rock').addEventListener('click', () => {


    playRound(getComputerChoice(),"rock");

  result();


});






document.querySelector('#paper').addEventListener('click', () => {


    playRound(getComputerChoice(),"paper");

  result();


});







document.querySelector('#scissors').addEventListener('click', () => {


    playRound(getComputerChoice(),"scissors");

  result();


});


