const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  var options2 =
  {
    restitution: 1
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground.position.x);

  ball = Bodies.circle(200,100,10,options2);
  World.add(world,ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
  rectMode(CENTER);  
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  //drawSprites();
}