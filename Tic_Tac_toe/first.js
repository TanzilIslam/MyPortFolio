$( document ).ready(function() {
  let playerOne = "X";
  let playerTwo = "O";
  let currentTurn = 1;
  let moveMade = 0 ;
  let square = $('.square');
  let winerContainer = $(".winer");
  let reset = $(".reset");


  square.on('click',function(e){
    moveMade ++;
    if (currentTurn === 1) {
      event.target.innerHTML = playerOne;
      event.target.style.color = "#191919";
      currentTurn++;
    }
    else{
      event.target.innerHTML = playerTwo;
      event.target.style.color = "#1f34da";
      currentTurn--;
    }
    if (checkForWin()) {
      let theWiner = currentTurn === 1 ? playerTwo:playerOne;
      declayerWiner(theWiner);
    }

  });
  reset.on('click',function(e){
    let moves = Array.prototype.slice.call($(".square"));
    moves.map((m) =>{
      m.innerHTML = "";
    });
    winerContainer.html('');
    winerContainer.css('display',"none");
    currentTurn =1;
    movesMade =  0;

  });



  function checkForWin() {
    if (moveMade>4) {
      let moves = Array.prototype.slice.call($(".square"));
      let results = moves.map(function(square)
    {
      return square.innerHTML;
    });
    let winingCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    return winingCombos.find(function(combo){
    if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]] ) {
      return true;
    }
    else {
      return false;
    }
    });
    }
  }
function declayerWiner(winner) {


  winerContainer.css("display","block");
  reset.css("display","block");


  let player1name = document.getElementById('playerone').value;
  let player2name =document.getElementById('playertwo').value;
  // let matchdraw = 'Match Draw';

  if (winner === playerOne ) {
    $(".winer").css('font-size','50px');
    winerContainer.html(player1name+" Wins");
    }
    else if (winner === playerTwo) {
      $(".winer").css('font-size','50px');
      winerContainer.html(player2name+" Wins");
    }
    else if(winner != playerOne && winner!= playerTwo) {
      $(".winer").css('font-size','50px');
      winerContainer.html(+"Match Draw");
      }

  // winner = winner === playerOne  ? player1name : player2name : matchdraw ;






 // $(".winer").css('font-size','50px');


  // winerContainer.html(winner+"Wins");

}
});
