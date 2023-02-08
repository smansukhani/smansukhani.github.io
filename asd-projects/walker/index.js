/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variable
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var BOARD_WIDTH = $('#board').width();
  var BOARD_HEIGHT = $('#board').height();
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;

  
  // Game Item Objects
var KEY = {
  "LEFT": 37,
  "UP": 38,
  "RIGHT":39,
  "DOWN":40,

}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionBox();
    checkForBorderCollision();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
  changeSpeedX(-5,event.which, KEY.LEFT);
  changeSpeedX(5,event.which, KEY.RIGHT);
  changeSpeedY(-5,event.which, KEY.UP);
  changeSpeedY(5,event.which, KEY.DOWN);
  }

  function handleKeyUp(event) {
  changeSpeedX(0,event.which, KEY.LEFT);
  changeSpeedX(0,event.which, KEY.RIGHT);
  changeSpeedY(0,event.which, KEY.UP);
  changeSpeedY(0,event.which, KEY.DOWN);
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionBox() {
    positionX += speedX; 
    $('#gameItem').css('left',positionX);

    positionY += speedY;
    $('#gameItem').css('top',positionY);
  }

  function changeSpeedX(newSpeed, keycode, arrowKey) {
    if (keycode === arrowKey) {
      speedX = newSpeed;
  }
}

  function changeSpeedY(newSpeed, keycode, arrowKey) {
    if (keycode === arrowKey) {
      speedY = newSpeed;
  }
  }

  function checkForBorderCollision() {
    if (positionX > BOARD_WIDTH - $("#gameItem").width()) {
      positionX = BOARD_WIDTH - $("#gameItem").width();
    }
    else if(positionX < 0) {
      positionX = 0;
    }

    if (positionY > BOARD_HEIGHT - $("#gameItem").height()) {
      positionY = BOARD_HEIGHT - $("#gameItem").height()
    }
    else if(positionY < 0) {
      positionY = 0;
    }
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
