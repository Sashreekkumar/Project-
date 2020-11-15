class Particles{
  constructor(x, y, r){

  var options = {
    restitution:0.04
  }
   this.r = r;
   this.body = Bodies.circle(x, y, r, options);
   this.color = color(random(0,255),random(0,255),random(0,255));
   World.add(world, this.body);
  }
     

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
     pop();
  }
};
