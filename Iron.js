class Iron {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);

    }
  };