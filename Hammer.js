class Hammer {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 140;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    Hammer.x = mouseX
    this.body.y = mouseY
    }
  };