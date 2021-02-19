const AnimSpark = function(canvas) {

  this.canvas = null;
  this.ctx = null;
  this.refRAF = null;
  this.pointer = { x: 0, y: 0, hold: false };
  this.autoPlay = false;
  this.particles = [];
  this.config = {
    debug: false,
    clearColor: '#333333',
    radius: 150,
    sparkColor: ['rgba(215,124,24,0.9)', 'rgba(220,122,24,0.35)', 'rgba(225,116,48,0.2)', 'rgba(235,112,64,0.1)', 'rgba(255,96,96,0)'],
    sparkWidth: 6,
    sparkLength: 100,
    maxParticles: 1000,
    perParticles: 12,
    hz: 1000 / 30,
    maxHz: 1000 / 30,
    minHz: 1000 / 5,
    speed: {
      current: 0,
      increment: 0.001,
      max: Math.PI * 0.12
    }
  };
  this.delta = null;
  this.buffer = document.createElement('canvas');
  this.startPos = { x: 0, y: 0 };
  // this.direction = 'direction' in canvas.dataset ? canvas.dataset.direction : 'start-end';

  this.tsAnimtStart = 0;
  this.tsLastRender = 0;

  this.init = function() {
    this.canvas = canvas;

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d', { alpha: true });
      this.resizeCanvas();
      this.initListeners();

      this.startPos.x = 'startposx' in this.canvas.dataset ? parseInt(this.canvas.dataset.startposx) : 0;
      this.startPos.y = 'startposy' in this.canvas.dataset ? parseInt(this.canvas.dataset.startposy) : this.canvas.height / 2;

      //
      let temp = this.buffer.getContext('2d');
      this.buffer.width = 128;
      this.buffer.height = 128;
      if (this.config.debug) {
        this.buffer.style.cssText = 'position: relative; left: 0; top: 0;';
        document.body.appendChild(this.buffer);
      }
      let ct = this.buffer.width * 0.5;
      let gradient = temp.createRadialGradient(ct, ct, 0, ct, ct, ct);
      gradient.addColorStop(0.12, this.config.sparkColor[0]);
      gradient.addColorStop(0.35, this.config.sparkColor[1]);
      gradient.addColorStop(0.65, this.config.sparkColor[2]);
      gradient.addColorStop(0.82, this.config.sparkColor[3]);
      gradient.addColorStop(0.99, this.config.sparkColor[4]);
      temp.fillStyle = gradient;
      temp.arc(ct, ct, ct, 0, Math.PI * 2);
      temp.fill();

      // TEST ONLY
      this.checkAnimationStart();
    }
  };

  this.resizeCanvas = function() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  };

  this.initListeners = function() {
    window.addEventListener('resize', function() {
      //call resizeCanvas
      resizeCanvas();
    });

    window.addEventListener('mousedown', function(e) {
      if (e.button === 0) {
        this.pointer.hold = true;
        console.log('mouse is down');
      }
    }.bind(this));

    window.addEventListener('mouseup', function(e) {
      if (e.button === 0) {
        this.pointer.hold = false;
        console.log('mouse is up');
      }
    }.bind(this));
  };

  this.checkAnimationStart = function() {
    this.restartAnimation();
  };

  this.restartAnimation = function() {
    if (this.refRAF !== null) {
      window.cancelAnimationFrame(this.refRAF);
    }
    this.tsAnimtStart = Date.now();
    this.tsLastRender = this.tsAnimtStart;

    this.render();
  };

  this.update = function(delta) {
    // console.log(this.pointer);
    if (this.pointer.hold || this.autoPlay) {
      this.config.speed.current = Math.min(this.config.speed.max, this.config.speed.current + this.config.speed.increment * delta);
    } else if (this.config.speed.current > 0) {
      this.config.speed.current = Math.max(0, this.config.speed.current - this.config.speed.increment * delta);
    }
    this.config.speed.max = Math.PI * 0.12 * delta;

    this.particles.forEach(p => p.update(delta, this));
    // console.log(this.particles);

    //
    if (this.config.speed.current > 0) {
      if (this.particles.length < this.config.maxParticles && Math.random() < this.config.speed.current * delta / this.config.speed.max) {
        let count = ~~(Math.random() * this.config.perParticles + 1);
        [...new Array(count)].forEach(() => {
          this.particles.push(
            new Particle({
              x: this.startPos.x,
              y: this.startPos.y,
              direction: -Math.random() - 0.1,
              length: this.config.sparkLength
            }, this)
          );
        });
      }
    }
  };

  this.render = function() {
    //check endanimation

    let tsDelta = Date.now() - this.tsLastRender;
    // let tsAnimationTime = Date.now() - this.tsGameStart;
    this.tsLastRender = Date.now();
    // console.log('DeltaTime: ' + tsDelta);

    this.update(tsDelta / this.config.hz);

    //clear canvas

    // with color
    this.ctx.globalAlpha = 0.65 * !this.config.isExposure ? 1 : 0.02;
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.fillStyle = this.config.clearColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // transparent
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //move/render all particles
    this.ctx.globalAlpha = 1;
    this.ctx.globalCompositeOperation = 'screen';
    this.particles.forEach(p => p.render(tsDelta / this.config.hz, this));

    //render total score & time
    this.refRAF = window.requestAnimationFrame(this.render);
    // console.log('Timestamp: ' + Date.now());
  }.bind(this);

  // Constructor
  this.init(canvas);
};


// x: 'startposx' in canvas.dataset ? parseInt(canvas.dataset.startposx)
// y: 'startposy' in canvas.dataset ? parseInt(canvas.dataset.startposy)

