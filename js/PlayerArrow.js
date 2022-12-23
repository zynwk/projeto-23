class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;

    // this.body = Bodies.rectangle(x, y, this.width, this.height);
    // this.body = Body.rectangle(x, y, this.width, this.height, options);
    // this.body = Bodies.rectangle(x, y, options);
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(archerAngle) {
    var archerAngle = playerArcher.angle - 28;
    archerAngle = archerAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y*(180/3.14) });
  }


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
