class Stone {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
            'friction':1.5,
            'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 90;
      this.height = 60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);

    }
  };