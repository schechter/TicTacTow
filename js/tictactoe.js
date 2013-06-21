var turn = 1;
var game_finished = false;
var game_state = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
var timer;
var counter = 4;

function clock_tick (){
  counter -=1;
  $('#clock').text(counter);
  if (counter === 0){
    if (turn % 2 === 1){
       alert("Tic Tac Toe should not take you this long.");
      location.reload(true);
    }
    else{
      alert("Player 2 Ran out of time.");
      location.reload(true);
    }
 }
 $('#clock').text(counter);
}

function computer_plays (){
  if(game_state[1][1] !== 1 && turn < 3){
    game_state[1][1] = -1;
    $('#11').text('O');
    $('#11').addClass('oed').removeClass('blank');
    turn+=1;
    timer = 3;
    return;
  }
  else {
    if (turn < 3){
      game_state[0][2] = -1;
      $('#02').text('O');
      $('#02').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }
  // here's wher it get's interesting.  we know the center spot is taken.  If we evaluate each row and column,  if the total of any column or row is 2 we go in the spot that is still a 0 in that row or column
  if (check_zeroith_col()){
    if (game_state[0][0] === 0){
      game_state[0][0] = -1;
      $('#00').text('O');
      $('#00').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[1][0] === 0){
      game_state[1][0] = -1;
      $('#10').text('O');
      $('#10').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[2][0] === 0){
      game_state[2][0] = -1;
      $('#20').text('O');
      $('#20').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }
  if (check_first_col()){
    if (game_state[0][1] === 0){
      game_state[0][1] = -1;
      $('#01').text('O');
      $('#01').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[1][1] === 0){
      game_state[1][1] = -1;
      $('#11').text('O');
      $('#11').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[2][1] === 0){
      game_state[2][1] = -1;
      $('#21').text('O');
      $('#21').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }

  if (check_second_col()){
    if (game_state[0][2] === 0){
      game_state[0][2] = -1;
      $('#02').text('O');
      $('#02').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[1][2] === 0){
      game_state[1][2] = -1;
      $('#12').text('O');
      $('#12').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[2][2] === 0){
      game_state[2][2] = -1;
      $('#22').text('O');
      $('#22').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }
  if (check_zeroith_row()){
      if (game_state[0][0] === 0){
      game_state[0][0] = -1;
      $('#00').text('O');
      $('#00').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[0][1] === 0){
      game_state[0][1] = -1;
      $('#01').text('O');
      $('#01').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[0][2] === 0){
      game_state[0][2] = -1;
      $('#02').text('O');
      $('#02').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }

  if (check_first_row()){
    if (game_state[1][0] === 0){
      game_state[1][0] = -1;
      $('#10').text('O');
      $('#10').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[0][1] === 0){
      game_state[1][1] = -1;
      $('#11').text('O');
      $('#11').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[1][2] === 0){
      game_state[1][2] = -1;
      $('#12').text('O');
      $('#12').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }

  if (check_second_row){
    if (game_state[2][0] === 0){
      game_state[2][0] = -1;
      $('#20').text('O');
      $('#20').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[2][1] === 0){
      game_state[2][1] = -1;
      $('#21').text('O');
      $('#21').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
    if (game_state[2][2] === 0){
      game_state[2][2] = -1;
      $('#22').text('O');
      $('#22').addClass('oed').removeClass('blank');
      turn+=1;
      timer = 3;
      return;
    }
  }
  var cell = 1;
  while(cell !== 0){
    var r =Math.floor(Math.random(0)*3);
    var c =Math.floor(Math.random(0)*3);
    cell = game_state[r][c];
  }
  if (game_state[r][c] === 0){
    game_state[r][c] = -1;
    $('#'+r+c).text('O');
    $('#'+r+c).addClass('oed').removeClass('blank');
    turn +=1;
    check_everything();
    timer = 3
    return;
    }
}

function check_zeroith_col(){
  if(check_col(0) === 2){
    var array = []
    array = array.concat(game_state[0][0]);
    array = array.concat(game_state[1][0]);
    array = array.concat(game_state[2][0]);
    array = array.sort();
    if(array[0] !== -1){
      return true
    }
  } 
}

function check_first_col(){
  if(check_col(1) === 2){
    var array = []
    array = array.concat(game_state[0][1]);
    array = array.concat(game_state[1][1]);
    array = array.concat(game_state[2][1]);
    array = array.sort();
    if(array[0] !== -1){
      return true
    }
  } 
}

function check_second_col(){
if(check_col(2) === 2){
    var array = []
    array = array.concat(game_state[0][2]);
    array = array.concat(game_state[1][2]);
    array = array.concat(game_state[2][2]);
    array = array.sort();
    console.log(array)
    if(array[0] !== -1){
      return true
    }
  return false
  } 
}


function check_zeroith_row(){
  if(check_row(0) === 2){
    var array = []
    array = array.concat(game_state[0][0]);
    array = array.concat(game_state[0][1]);
    array = array.concat(game_state[0][2]);
    array = array.sort();
    if(array[0] !== -1){
      return true;
    }
  } 
}

function check_first_row(){
  if(check_row(1) === 2){
    var array = []
    array = array.concat(game_state[1][0]);
    array = array.concat(game_state[1][1]);
    array = array.concat(game_state[1][2]);
    array = array.sort();
    if(array[0] !== -1){
      return true;
    }
  } 
}

function check_second_row(){
  if(check_row(2) === 2){
    var array = []
    array = array.concat(game_state[2][0]);
    array = array.concat(game_state[2][1]);
    array = array.concat(game_state[2][2]);
    array = array.sort();
    if(array[0] !== -1){
      return true;
    }
  } 
}

function win_game(player_name) {
  clearInterval(timer);
  alert(player_name + ' wins!');
  game_finished = true;
  $('#reset').show();
  location.reload(true);
}

function draw_game() {
  clearInterval(timer);
  alert('The Game is a Draw');
  game_finished = true;
  $('#reset').show();
  location.reload(true)
}

function reset_game(){
  game_finished = false;
  turn = 1;
  game_state = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
  $('td').removeClass('xed').removeClass('oed').addClass('blank').text('');
  $(this).hide();
  location.reload(true);
}

function check_row(row) {
  if (!game_finished) {
    var row_sum = game_state[row][0] + game_state[row][1] + game_state[row][2];
    switch (row_sum) {
      case 3:
        win_game('You Won!');
        break;
      case -3:
        win_game('Computer Wins');
        break;
    }
  return row_sum
  }
}

function check_col(col) {
  if (!game_finished) {
    var col_sum = game_state[0][col] + game_state[1][col] + game_state[2][col];
    switch (col_sum) {
      case 3:
        win_game('You Won!');
        break;
      case -3:
        win_game('Computer Wins');
        break;
    }
    return col_sum;
  }
}

function check_rows() {
  for (var i = 0; i < game_state[0].length; i++) {
    check_row(i);
  }
}

function check_cols() {
  for (var i = 0; i < game_state[0].length; i++) {
    check_col(i);
  }
}

function check_diagonals() {
  var ltr = game_state[0][0] + game_state[1][1] + game_state[2][2];
  var rtl = game_state[0][2] + game_state[1][1] + game_state[2][0];
  switch (ltr) {
    case 3:
      win_game('You Win');
      break;
    case -3:
      win_game('Computer Wins');
      break;
  }
  switch (rtl) {
    case 3:
      win_game('You Win');
      break;
    case -3:
      win_game('Computer Wins');
      break;
  }
}

function check_draw() {
  if (turn > 9 && !game_finished) {
    draw_game();
  }
}

function check_everything() {
  check_rows();
  check_cols();
  check_diagonals();
  check_draw();
}

function mark_cell() {
  if (!game_finished) {
    var row = $(this).parent().data('row');
    var col = $(this).data('col');
    switch (turn % 2 === 1) {
      case true:
        game_state[row][col] = 1;
        $(this).text('X');
        $(this).addClass('xed').removeClass('blank');
        break;
      case false:
        game_state[row][col] = -1;
        $(this).text('O');
        $(this).addClass('oed').removeClass('blank');
        break;
    }
    turn += 1;
    check_everything();
    counter = 3;
    setTimeout(computer_plays, 300);    
  }
}

$(document).ready(function() {
  // Notice that I am using a slightly different version of the standard .click() event. This one uses "delegation", where the table that holds the td elements is delegating the event to its 'td.blank' children
  // .on('click') is recommended over .click()
  $('#tictactoe_board').on('click', '.blank.cell', mark_cell);
  $('#reset').on('click', reset_game);
  timer = setInterval(clock_tick, 1000);

});