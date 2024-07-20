let rondomNum=Math.trunc(Math.random()*100)+1;
console.log(rondomNum);

let currentScore=10;
let historyHighScore=0;

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
    if (currentScore>historyHighScore){
        historyHighScore=currentScore
        }
    }
    else{

        if(Number(userInput.value)>rondomNum){
            msg.textContent='Wrong number! too high! try smaller value';
            msg.style.color='red';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);    
        }
        if(Number(userInput.value)<rondomNum){
            msg.textContent='Wrong number! too low! try a larger value';
            msg.style.color='red';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);

            
        }
    }

}

}

)


