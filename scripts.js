let rondomNum=Math.trunc(Math.random()*100)+1;
console.log(rondomNum);

let currentScore=10;
let historyHighScore=0;
const guesshistory = [];

let checkbtn=document.querySelector('.checkbtn')
let reset=document.querySelector('.resetbtn');
let msg=document.querySelector('p')
let userInput=document.querySelector('input');
let currntScore=document.querySelector('.crrntscore');


checkbtn.addEventListener('click',function(){
    
if(currentScore>0){
    if(Number(userInput.value)===rondomNum){
        msg.textContent='Congrats! you win the game!';
        msg.style.color='green';
        msg.style.fontSize='44px';
        userInput.style.display = "none";
        checkbtn.style.display = "none";
    if (currentScore>historyHighScore){
        historyHighScore=currentScore
        }
    }
    else{
       
        if(Number(userInput.value)>rondomNum){
            msg.textContent='Wrong number! too high! try smaller value';
            msg.style.color='yellow';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
            guesshistory.push(userInput); 
            console.log(guesshistory);   
        }
        if(Number(userInput.value)<rondomNum){
            msg.textContent='Wrong number! too low! try a larger value';
            msg.style.color='yellow';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
            guesshistory.push(userInput)    
            console.log(guesshistory)   

        }
        if(currentScore===0){
            msg.textContent='You lose! Play again!';
            msg.style.color='red';
            msg.style.fontSize='34px';
            userInput.style.display = "none";
            checkbtn.style.display = "none";

            console.log("lose condition fired");
        }
    }

}

}

)


