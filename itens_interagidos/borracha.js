class Borracha {
    constructor(x, y, radius, angle) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.3
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white');
      fill('orange');
      rectMode(CENTER);
      ellipse(0, 0, this.radius);
      pop();
    }
  }
  