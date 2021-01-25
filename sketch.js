
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;
ground = new Ground(600,height,1200,40);
hammer = new Hammer(400,400,140,50)
iron = new Iron(500,300,70,70)
stone = new Stone(600,300,90,60)
sand1 = new Sand(20,300,20,20)
sand2 = new Sand(50,300,20,20)
sand3 = new Sand(80,300,20,20)
sand4 = new Sand(110,300,20,20)
sand5 = new Sand(140,300,20,20)
sand6 = new Sand(170,300,20,20)
rubber = new Rubber(700,300,30,30)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  hammer.display();
  iron.display();
  rubber.display()
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  Matter.Body.setPosition(hammer.body, {x: mouseX , y: mouseY});
  drawSprites();
 
}



