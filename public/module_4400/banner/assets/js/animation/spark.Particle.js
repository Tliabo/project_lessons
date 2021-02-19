const Particle = function(options, animSpark) {

  this.x = options.x;
  this.y = options.y;
  this.thickness = Math.random() + 0.5;
  this.velocity = {
    base: options.base || 0.65,
    direction: options.direction,
    length: options.length * Math.max(animSpark.config.speed.current / animSpark.config.speed.max, 0.2)
  };
  // console.log(this.velocity.length);
  this.accelerate = { max: 0, min: -Math.PI * 0.5, change: Math.random() * 0.2 - 0.1 };
  this.gravity = { direction: Math.PI * 0.5, force: 0.04 + Math.random() * 0.02 };
  this.friction = 0.725 + Math.random() * 0.12;
  this.lifespan = 40 + Math.random() * 24;
  this.first = options.first || 1;

  this.update = function(delta, animSpark) {
    this.lifespan -= 1 * delta;
    this.velocity.length = Math.max(this.velocity.length - (1 - this.friction) * this.velocity.length * delta, 2);
    let x = this.x + Math.cos(this.velocity.direction) * this.velocity.length * delta;
    let y = this.y + Math.sin(this.velocity.direction) * this.velocity.length * delta;
    this.rotation = Math.atan2(y - this.y, x - this.x);
    this.x = x;
    this.y = y;

    this.combine(delta, animSpark);
    if (this.lifespan < 0) {
      let index = animSpark.particles.findIndex(p => p === this);
      animSpark.particles.splice(index, 1);
    }
  };

  this.combine = function(delta, animSpark) {
    if (this.first === 1) {
      this.accelerate.max = this.velocity.direction + this.velocity.base;
      this.accelerate.min = this.velocity.direction - this.velocity.base;
    }
    let step = this.accelerate.change * delta;
    this.velocity.direction += step;
    if (this.velocity.direction > this.accelerate.max || this.velocity.direction < this.accelerate.min) {
      this.accelerate.change *= -1;
    }
    this.velocity.direction += this.gravity.force * delta;
    this.first = Math.max(0, this.first - delta);
    if ((Math.random() < 0.005 * delta) && (this.velocity.length > 10)) {
      let count = ~~(Math.random() * animSpark.config.perParticles + 2);
      [...new Array(count)].forEach(() => {
        animSpark.particles.push(new Particle({
          x: this.x,
          y: this.y,
          base: Math.PI,
          direction: this.velocity.direction + Math.PI * (Math.random() - 0.5),
          length: Math.min(this.velocity.length * (Math.random() + 1), 32)
        }, animSpark));
      });
    }
  };

  this.render = function(delta, animSpark) {
    let w = animSpark.config.sparkWidth * this.thickness * this.velocity.length * delta;
    let h = animSpark.config.sparkWidth * this.thickness * this.lifespan * 1.45 / 80;
    w = Math.max(w, h);
    animSpark.ctx.translate(this.x, this.y);
    animSpark.ctx.rotate(this.rotation);
    animSpark.ctx.drawImage(animSpark.buffer, -w * 0.5, -h * 0.5, w, h);
    animSpark.ctx.rotate(-this.rotation);
    animSpark.ctx.translate(-this.x, -this.y);
    if (this.first > 0) {
      w /= delta * 5;
      animSpark.ctx.globalAlpha = Math.random() * 0.8;
      animSpark.ctx.drawImage(animSpark.buffer, this.x - w, this.y - w, w * 2, w * 2);
      animSpark.ctx.globalAlpha = 1;
    }
  };
};