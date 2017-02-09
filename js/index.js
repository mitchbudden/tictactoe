
$(document).ready(function(){
  //stores who's turn it is
  var turn = "X";
  var computersTurn = "O";
  
  //Array to store which moves have been made on board
  var turns = ["#", "#","#", "#","#", "#","#", "#", "#"];
  
  //keeps track of computer's turn
  var gameOn = false;
  var count = 0;

  //Initial Game Setup
  $("#reset").hide();
  $("#tictac").hide();
  $("#x").on('click', function() {
    $("#textbox, #start, #x, #o").hide();
    $("#tictac").show();
  });
  $("#o").on('click', function() {
    turn ="O";
    computersTurn = "X";
    $("#textbox, #start, #x, #o").hide();
    $("#tictac").show();
  })
  
   //Opponent functions

  function gameOver() {
    $("#tictac").hide();
    $("#reset").show();
  }
 
  function winCondition(turnArray, currentTurn) {
    if (turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Top row across 0,1,2 spots");
    } else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray[5]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Middle row across 3,4,5 spots");
    } else if (turnArray[6] === currentTurn && turnArray[7]===currentTurn && turnArray[8]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Bottom row across 6,7,8 spots");
    } else if (turnArray[0] === currentTurn && turnArray[3]===currentTurn && turnArray[6]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Left column down 0,3,6 spots");
    } else if (turnArray[1] === currentTurn && turnArray[4]===currentTurn && turnArray[7]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Middle column down 1,4,7 spots");
    } else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray[8]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Right column down 2,5,8 spots");
    } else if (turnArray[0] === currentTurn && turnArray[4]===currentTurn && turnArray[8]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Left diagonal 0,4,8 spots");
    } else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray[6]===currentTurn) {
      gameOn = true;
      gameOver();
      alert("Player" + currentTurn + " wins! - Right diagonal 2,4,6 spots");
    } else if (turns.indexOf("#") === -1) {
      gameOn = true;
      gameOver();
      alert("DRAW");
    } else {
    gameOn = false;
    }    
  } 
  function computerTurn(){
    //used to break while loop
    var taken = false;
    while(taken===false && count!==5){
      //Generate computers random turn
      var computersMove = (Math.random()*10).toFixed();
      var move= $("#"+computersMove).text();
      if(move ==="#"){
        $("#"+computersMove).text(computersTurn);
        taken=true;
        turns[computersMove] = computersTurn;
      }
    }
  }
  
  function playerTurn(turn, id){
    var spotTaken = $("#"+ id).text();
    if(spotTaken==="#"){
      count++;
      $("#"+id).text(turn);
      turns[id]=turn;
      
      winCondition(turns, turn);
      if(gameOn ===false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  

  //Board Location Buttons
  
  $(".tic").click(function() {
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });
  
  //RESET      
  $("#reset").on('click', function(){
    console.log('working');
    turns= ["#","#","#","#","#","#","#","#","#",];
    count = 0;
    $(".tic").text("#");
    gameOn =false;
    $("#textbox").show();
    $("#start").show();
    $("#x").show();
    $("#o").show();
    $("#reset").hide();
  });
  
  
  //OLD CODE 
  
    /*function gameOver() {
    function end() {
      $("#tictac").hide();
      $("#textbox").show();
      $("#textbox").html("<b>" + "GAME OVER" + "</b>");
      $("#reset").show();  
    }
    if (board.indexOf(1) !== -1 && board.indexOf(2) !== -1 && board.indexOf(3) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(4) !== -1 && board.indexOf(5) !== -1 && board.indexOf(6) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(7) !== -1 && board.indexOf(8) !== -1 && board.indexOf(9) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(1) !== -1 && board.indexOf(4) !== -1 && board.indexOf(7) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(2) !== -1 && board.indexOf(5) !== -1 && board.indexOf(8) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(3) !== -1 && board.indexOf(6) !== -1 && board.indexOf(9) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(1) !== -1 && board.indexOf(5) !== -1 && board.indexOf(9) !== -1) {
      points = 10;
      end();
    } else if (board.indexOf(3) !== -1 && board.indexOf(5) !== -1 && board.indexOf(7) !== -1) {
      points = 10;
      end();
    }
  }*/
  
  
  /*$("#one").on('click', function() {
    board.push(1);
    gameOver();
    if (counter === 1) {
      $("#one").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#one").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#two").on('click', function() {
    board.push(2);
    gameOver();
    if (counter === 1) {
      $("#two").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#two").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#three").on('click', function() {
    board.push(3);
    gameOver();
    if (counter === 1) {
      $("#three").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#three").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#four").on('click', function() {
    board.push(4);
    gameOver();
    if (counter === 1) {
      $("#four").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#four").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#five").on('click', function() {
    board.push(5);
    gameOver();
    if (counter === 1) {
      $("#five").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#five").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#six").on('click', function() {
    board.push(6);
    gameOver();
    if (counter === 1) {
      $("#six").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#six").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#seven").on('click', function() {
    board.push(7);
    gameOver();
    if (counter === 1) {
      $("#seven").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#seven").html("<b>" + "O" + "</b>");
    }
  })
  
    $("#eight").on('click', function() {
    board.push(8);
    gameOver();
    if (counter === 1) {
      $("#eight").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#eight").html("<b>" + "O" + "</b>");
    }
  })
 
    $("#nine").on('click', function() {
    board.push(9);
    gameOver();
    if (counter === 1) {
      $("#nine").html("<b>"+ "X" + "</b>");
    } else if(counter === 0) {
      $("#nine").html("<b>" + "O" + "</b>");
    }
  })  

  $("#reset").on('click', function() {
    var counter = 0;
    var onBoard = 0;
    $("#start").show();
    $("#x").show();
    $("#o").show();
  })*/
})