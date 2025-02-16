let options=document.querySelectorAll(".choice");
let userScore=document.querySelector("#user_score");
let compScore=document.querySelector("#comp_score");
let para=document.querySelector("p");

let user_Score=0;
let comp_Score=0;

const gamestart=(userchoice)=>{
    const compChoice=options[Math.floor(Math.random()*3)].getAttribute("id");
    console.log(`COMPUTER chose ${compChoice}`);
    if(userchoice===compChoice){
        console.log("draw");
        para.innerText="DraW";
    }
    else{
        //user=rock and wins when comp=scissor lose at paper
        let win=true;
        if(userchoice==="rock"){
            compChoice === "paper" ? (comp_Score++, win = false) : (user_Score++, win = true);

            console.log(`userScore ${user_Score}`);
            if(win){
                para.innerText="you win";
            }
            else{
                para.innerText="you lose";
            }

        }
        else if(userchoice==="paper"){
            compChoice === "scissor" ? (comp_Score++, win = false) : (user_Score++, win = true);
            if(win){
                para.innerText="you win";
            }
            else{
                para.innerText="you lose";
            }
        }
        else{
            compChoice === "rock" ? (comp_Score++, win = false) : (user_Score++, win = true);
            if(win){
                para.innerText="you win";
            }
            else{
                para.innerText="you lose";
            }
        }
        userScore.innerText=user_Score;
        compScore.innerText=comp_Score;
        console.log(`userScore ${user_Score}`);
    }
}

options.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(`clicked at ${userchoice}`);
        gamestart(userchoice);
    });
});
