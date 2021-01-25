class Rubber {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body=Bodies.circle(200,100,20,options);
      World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,30,30);

      fill("blue");
      
    }
  };