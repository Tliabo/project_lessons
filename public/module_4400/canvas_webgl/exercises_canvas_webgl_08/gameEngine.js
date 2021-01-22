/* 
 * Copyright 2020 by Pascal Stoop
 */

function GameEngine(canvasId) {
  //methods
  this.initGameEngine = function(canvasId) {
    this.refCanvas = document.getElementById(canvasId);
    if (this.refCanvas.getContext) {
      this.ctx = this.refCanvas.getContext('2d', {alpha: true});
      this.resizeCanvas();
      this.initListeners();

      // TEST ONLY
      this.checkGameStart();
    }
    else {
      alert("Your browser doesn't support the canvas-tag.");
    }
  };
  
  this.resizeCanvas = function() {
    this.refCanvas.width = this.refCanvas.clientWidth;
    this.refCanvas.height = this.refCanvas.clientHeight;
  };
  
  this.initListeners = function() {
    window.addEventListener("resize", function() {
      //call resizeCanvas
    });

    $("#" + canvasId).on("mousedown", function (evt) {
      var cPos = getPositionFromEvent(evt, my.refCanvas);
      console.log("x:" + cPos.x + ", y:" + cPos.y);
      //call checkPlayerClickPosition

    });
  };
  
  this.checkGameStart = function() {
      this.restartGame();
  };
  
  this.restartGame = function() {
    if (this.refRAF !== null){
      window.cancelAnimationFrame(this.refRAF);
    };
    this.render();
  };
  
  this.checkPlayerClickPosition = function(cPos) {
    
  };
  
  this.render = function() {
    //check endgame
    
    
    //clear canvas
   
   
    //create new MoneyObjects
    
    
    //move/render all Money-Objects
    
   
    //render total score & time
    this.refRAF = window.requestAnimationFrame(this.render);
    console.log("Timestamp: " + Date.now());
  }.bind(this);
  
  this.refCanvas = null;
  this.ctx = null;
  this.refRAF = null;
  this.arrGoldObj = [];
  
  this.tsGameStart = 0;
  this.tsLastRender = 0;
  this.tsNextObj = 0;
  
  //constructor
  this.initGameEngine(canvasId);
}


// Gold Piece
function GoldPiece() {

  this.move = function(delta){

  };

  this.render = function(delta){

  };

  this.x = 0;
  this.y = 0;
  this.w = 64;
  this.h = 64;
}