let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePAra = document.querySelector("#comp-score");

const genCompChoice=() => {
    const options=["rock","paper","scissors"];
    Math.random() //--> random will generate som random value from 0 to 1
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
    //to generate the rock paper scissors 
}

const drawGame=() => {
    msg.innerText="Game was draw.Play agaian ... "
    msg.Style.backgroundColor="yellow";
}

const showWinner=(userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win !");
        msg.innerText=`You Win ! ${userChoice} beats ${compChoice}`;
        msg.Style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You lose ! ${compChoice} beats your  ${userChoice}`;
        msg.Style.backgroundColor="red";
    }
}

const playGame=(userChoice) => {
    console.log("User choice = ",userChoice);
    //To generate computer choice. --> Modular(small small components and used )
    const compChoice=genCompChoice();
    console.log("Computer choice =",compChoice);
    if(userChoice === compChoice){
        //Draw condition 
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock") {
            //computer choice is either scissors, paper 
           userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //computer choice is either rock ,scissors
            userWin = compChoice=== "scissors"? false:true;
        }
        else {
            //computer choice is either rock, paper 
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
    //console.log("Choice was clicked",userChoice);
    playGame(userChoice);
    });
});