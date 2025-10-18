function getComputerChoice(){

    let randomNumber = (Math.random() * 10);

    if(randomNumber < 1/3){
        return "rock";
    }else if(randomNumber < 2/3){
        return "paper";
    }else{
        return "scissors";
    }

}



function getHumanChoice(){
    
    let humanChoice = prompt("Enter your choice: 1 = rock, 2 = paper, 3 =scissors");

    switch(humanChoice){
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "scissors";
    default:
        return "Invalid choice";
    }

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


function playgame(){

let finalresut;


for(let i=0; i<=4; i++){

    playRound(getComputerChoice(), getHumanChoice());

    if(i==4){
        finalresut =
         ComputerScore == HumanScore ? "It's a draw" :
         ComputerScore > HumanScore ? "The computer won 🖥🤢"
         : "You won 👏💕🙌" ;

         console.log("ComputerScore :  " + ComputerScore + "   HumanScore :   "+ HumanScore +" ---> "+ finalresut);
    }


}

}



playgame();