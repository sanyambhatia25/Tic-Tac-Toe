const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const helloDiv = document.querySelectorAll('.game-cell');
let gameIsLive=true;
let xIsNext = true;
let winner = null;
const xSymbol='X';
const oSymbol='O';
const letterToSymbol = (letter) => letter == 'x' ? xSymbol:oSymbol;

const whoWin = (letter) => {
    gameIsLive= false;
    winner=letter;
    if(winner == 'x' ){
        statusDiv.innerHTML=`<span style="color:red";>${letterToSymbol(winner)} has won!!</span>`;
    }else
    statusDiv.innerHTML=`<span style="color:red";>${letterToSymbol(winner)} has won!!</span>`;
}

const gameStatus= () => {
    const topLeft=helloDiv[0].classList[1];
    const topCentre=helloDiv[1].classList[1];
    const topRight=helloDiv[2].classList[1];
    const middleLeft=helloDiv[3].classList[1];
    const middleCentre=helloDiv[4].classList[1];
    const middleRight=helloDiv[5].classList[1];
    const bottomLeft=helloDiv[6].classList[1];
    const bottomCentre=helloDiv[7].classList[1];
    const bottomRight=helloDiv[8].classList[1];

    if(topLeft && topLeft === topCentre && topLeft === topRight ){
       whoWin(topLeft); 
       helloDiv[0].classList.add('won');
       helloDiv[1].classList.add('won');
       helloDiv[2].classList.add('won');
}else if(middleLeft && middleLeft === middleCentre && middleLeft === middleRight){
    whoWin(middleLeft);
    helloDiv[3].classList.add('won');
    helloDiv[4].classList.add('won');
    helloDiv[5].classList.add('won');
}else if(bottomLeft && bottomLeft === bottomCentre && bottomLeft === bottomRight){
    whoWin(bottomLeft);
    helloDiv[6].classList.add('won');
    helloDiv[7].classList.add('won');
    helloDiv[8].classList.add('won');
}else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
    whoWin(topLeft);
    helloDiv[0].classList.add('won');
    helloDiv[3].classList.add('won');
    helloDiv[6].classList.add('won');
}else if(topCentre && topCentre === middleCentre && topCentre === bottomCentre){
    whoWin(topCentre);
    helloDiv[1].classList.add('won');
    helloDiv[4].classList.add('won');
    helloDiv[7].classList.add('won');
}else if(topRight && topRight === middleRight && topRight === bottomRight){
    whoWin(topRight);
    helloDiv[2].classList.add('won');
    helloDiv[5].classList.add('won');
    helloDiv[8].classList.add('won');
}else if(topLeft && topLeft === middleCentre && topLeft === bottomRight){
    whoWin(topLeft);
    helloDiv[0].classList.add('won');
    helloDiv[4].classList.add('won');
    helloDiv[8].classList.add('won');
}else if(topRight && topRight === middleCentre && topRight === bottomLeft){
    whoWin(topRight);
    helloDiv[2].classList.add('won');
    helloDiv[4].classList.add('won');
    helloDiv[6].classList.add('won');
}else if(topLeft && topCentre && topRight && middleLeft && middleCentre && middleRight && bottomLeft && bottomCentre && bottomRight){
    gameIsLive =false;
    statusDiv.innerHTML='Game is Tied!';
}else{
    xIsNext = !xIsNext;
    if(xIsNext){
    statusDiv.innerHTML=`${xSymbol} is next`;
    }else{
    statusDiv.innerHTML=`<span style="color:goldenrod";>${oSymbol} is next</span>`;
}
  }
    };

const resetclick= () =>{
    xIsNext=true;
    winner=null;
    statusDiv.innerHTML=`${xSymbol} is next`;
    for(const helloDivs of helloDiv)
    helloDivs.classList.remove('x', 'o', 'won');
};
const helloClick = (e) =>{
const classList = e.target.classList;
if(classList[1] == 'x' || classList[1] == 'o' )
return;
if(xIsNext){
     classList.add('x');
     gameStatus();
     
}
else{
    classList.add('o');
    gameStatus();
    
}
};
resetDiv.addEventListener('click',resetclick)
for(const helloDivs of helloDiv){
helloDivs.addEventListener('click', helloClick)
}