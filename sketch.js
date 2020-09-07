const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
console.log(1);

var engine, world, box1,ground,pig1;
function setup() {
  canvas = createCanvas(1200,400);
  console.log(1);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
 
  ground = new Ground(600, height ,1200,20);
  pig1 = new Pig(200,200);
  log1 = new Log(100,300,100,90);
}

function draw() {
  background(0);

  Engine.update(engine);



  box1.display();
  box2.display();
 
  ground.display();
  pig1.display();
  log1.display();
}