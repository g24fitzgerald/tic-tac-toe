$(function(){

  var userMark;
  var currentUser = true;

  function userTurn() {
    //use if statement to alternate users
    if (currentUser) {
     $('#playerId').text(1)
     userMark = "X"
     $(this).text(userMark);
     //increment player's score
     $('#playerOne').text(parseInt($('#playerOne').text()) + 1);
     //change curent player
     $('#playerId').text(2)
   } else {

     //put O in box
     userMark = "O";
     $(this).text(userMark);
     //icrement playerTwo's score
     $('#playerTwo').text(parseInt($('#playerTwo').text()) + 1);
     //change user back to 1
     $('#playerId').text(1)
    }

     currentUser = !(currentUser);
     checkForWinner();
     return currentUser;
   }

  //check for winner. if no winner, continue
  //this was is inefficient because we need to check that they don't equal an empty string
  function checkForWinner(e) {
    if ( ($('#topLeft').text()) &&
         $('#topLeft').text() === $('#topCenter').text() &&
         $('#topLeft').text() === $('#topRight').text() ){
      alert($('#topRight').text() + ' is the winner');
    } else if ( ($('#midLeft').text()) &&
         ($('#midLeft').text() === $('#midCenter').text()) &&
         ($('#midLeft').text() === $('#midRight').text()) ){
      alert($('#midRight').text() + ' is the winner');
    } else if ( ($('#bottomLeft').text()) &&
         ($('#bottomLeft').text() === $('#bottomCenter').text()) &&
         ($('#bottomLeft').text() === $('#bottomRight').text()) ){
      alert($('#bottomRight').text() + ' is the winner');
    } else if ( ($('#topLeft').text()) &&
         ($('#topLeft').text() === $('#midCenter').text()) &&
         ($('#topLeft').text() === $('#bottomRight').text()) ){
      alert($('#topLeft').text() + ' is the winner');
    } else if (
         ($('#bottomLeft').text()) &&
         ($('#bottomLeft').text() === $('#midCenter').text()) &&
         ($('#bottomLeft').text() === $('#topRight').text()) )
         {
      alert($('#topRight').text() + ' is the winner');
    } else if (
      $('#topLeft').text() != "" &&
      $('#topCenter').text()!= "" &&
      $('#topRight').text()!= "" &&
      $('#midLeft').text()!= "" &&
      $('#midCenter').text()!= "" &&
      $('#midRight').text()!= "" &&
      $('#bottomLeft').text()!= "" &&
      $('#bottomCenter').text()!= "" &&
      $('#bottomRight').text()!= "" )
    {
      alert('Tie Game!');
    } else {
    console.log('hey');
    }
  }

  //we want to make event handlers for the .on use this
  $('.box').on('click', userTurn);


});
