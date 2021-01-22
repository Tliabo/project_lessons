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
      
  };
  
  this.restartGame = function() {
    
  };
  
  this.checkPlayerClickPosition = function(cPos) {
    
  };
  
  this.render = function() {
    //check endgame
    
    
    //clear canvas
   
   
    //create new MoneyObjects
    
    
    //move/render all Money-Objects
    
   
    //render total score & time
    
    
  };
  
  this.refCanvas = null;
  this.ctx = null;
  
  //constructor
  this.initGameEngine(canvasId);
}
